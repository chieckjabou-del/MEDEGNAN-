import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content/site";

/**
 * Le formulaire du site nourrit le Portail du cabinet (5 octobre 2026).
 *
 * La demande part d'abord au Portail, qui l'enregistre comme prospect, ouvre
 * l'espace de suivi du demandeur (créneau d'appel si l'urgence est élevée,
 * date de démarrage sinon) et prévient la direction. La réponse rend la
 * référence et le lien de cet espace.
 *
 * Un refus du Portail (pays non reconnu, trop de dépôts dans la journée) se
 * dit au demandeur tel quel. Si le Portail ne répond pas, la demande ne se
 * perd pas : elle part par courriel, puis, à défaut, sur WhatsApp.
 */
const PORTAIL = (process.env.PORTAIL_URL || "https://portail.medegnan.com").replace(/\/$/, "");

async function versLePortail(data: Record<string, unknown>) {
  try {
    const res = await fetch(`${PORTAIL}/api/demande-site`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    const corps = (await res.json().catch(() => null)) as
      | { ok: boolean; message?: string; reference?: string; urgent?: boolean; espace?: string }
      | null;
    if (res.ok && corps?.ok) return { ok: true as const, corps };
    if (res.status >= 400 && res.status < 500 && corps?.message) return { ok: false as const, refus: corps.message };
    return null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  const required = ["orgType", "probleme", "nom", "email"];
  for (const key of required) {
    if (!data?.[key] || typeof data[key] !== "string") {
      return NextResponse.json({ ok: false, reason: "invalid_payload" }, { status: 400 });
    }
  }

  const portail = await versLePortail(data);
  if (portail?.ok) {
    return NextResponse.json({
      ok: true,
      canal: "portail",
      reference: portail.corps.reference,
      urgent: portail.corps.urgent,
      espace: portail.corps.espace,
    });
  }
  if (portail && !portail.ok) {
    return NextResponse.json({ ok: false, reason: "refus", message: portail.refus }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Ni Portail ni clé Resend : le client bascule sur WhatsApp.
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
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
    return NextResponse.json({ ok: true, canal: "courriel" });
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
