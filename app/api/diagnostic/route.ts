import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content/site";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Pas encore de clé Resend configurée sur Vercel : le client bascule sur mailto.
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  const data = await request.json();

  const required = ["orgType", "probleme", "nom", "email"];
  for (const key of required) {
    if (!data?.[key] || typeof data[key] !== "string") {
      return NextResponse.json({ ok: false, reason: "invalid_payload" }, { status: 400 });
    }
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Nouvelle demande de diagnostic</h2>
    <p><strong>Type d'organisation :</strong> ${escapeHtml(data.orgType)}</p>
    <p><strong>Secteur :</strong> ${escapeHtml(data.secteur ?? "")}</p>
    <p><strong>Pays :</strong> ${escapeHtml(data.pays ?? "")}</p>
    <p><strong>Taille :</strong> ${escapeHtml(data.taille ?? "")}</p>
    <p><strong>Problème principal :</strong> ${escapeHtml(data.probleme)}</p>
    <p><strong>Objectif :</strong> ${escapeHtml(data.objectif ?? "")}</p>
    <p><strong>Type d'accompagnement recherché :</strong> ${escapeHtml(data.accompagnement ?? "")}</p>
    <p><strong>Niveau d'urgence :</strong> ${escapeHtml(data.urgence ?? "")}</p>
    <p><strong>Budget indicatif :</strong> ${escapeHtml(data.budget ?? "")}</p>
    <hr />
    <p><strong>Nom :</strong> ${escapeHtml(data.nom)}</p>
    <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.telephone ?? "")}</p>
  `;

  try {
    await resend.emails.send({
      // Adresse d'expédition par défaut de Resend tant qu'un domaine propre au cabinet
      // n'est pas vérifié (voir onboarding@resend.dev dans la documentation Resend).
      from: "MEDEGNAN Site <onboarding@resend.dev>",
      to: site.contact.email,
      replyTo: data.email,
      subject: `Demande de diagnostic : ${data.orgType} (${data.secteur || "secteur non précisé"})`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend send failed", error);
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
