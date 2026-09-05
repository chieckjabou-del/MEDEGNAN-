"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/content/site";
import { whatsappLink } from "@/lib/whatsapp";

const orgTypes = ["Entreprise privée", "Institution publique", "Fonds / investisseur", "Banque / institution financière", "Autre"];
const sizes = ["Moins de 10 employés", "10 à 50 employés", "50 à 200 employés", "Plus de 200 employés"];
const urgencies = ["Faible — exploratoire", "Modérée — dans les prochains mois", "Élevée — dans les prochaines semaines", "Critique — situation urgente"];
const supportTypes = ["Diagnostic", "Structuration", "Transformation", "Accélération / croissance", "Pilotage & accompagnement", "Je ne sais pas encore"];
const budgets = ["Moins de 500 000 FCFA", "500 000 – 1 500 000 FCFA", "1 500 000 – 4 000 000 FCFA", "Plus de 4 000 000 FCFA", "À définir avec vous"];

const fieldClass =
  "w-full border border-ink/25 bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus-visible:outline-2 focus-visible:outline-accent";
const labelClass = "block text-sm font-medium text-ink";

type FormData = {
  orgType: string;
  secteur: string;
  pays: string;
  probleme: string;
  nom: string;
  email: string;
  telephone: string;
  taille: string;
  urgence: string;
  objectif: string;
  accompagnement: string;
  budget: string;
};

function buildSummary(data: FormData) {
  return [
    `Nouvelle demande de diagnostic — ${data.orgType}`,
    ``,
    `Type d'organisation : ${data.orgType}`,
    `Secteur : ${data.secteur}`,
    `Pays : ${data.pays}`,
    `Taille : ${data.taille}`,
    `Problème principal : ${data.probleme}`,
    `Objectif : ${data.objectif}`,
    `Type d'accompagnement recherché : ${data.accompagnement}`,
    `Niveau d'urgence : ${data.urgence}`,
    `Budget indicatif : ${data.budget}`,
    ``,
    `Nom : ${data.nom}`,
    `Email : ${data.email}`,
    `Téléphone : ${data.telephone}`,
  ].join("\n");
}

export default function QualificationForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent-email" | "sent-mailto">("idle");
  const [data, setData] = useState<FormData>({
    orgType: orgTypes[0],
    secteur: "",
    pays: "",
    probleme: "",
    nom: "",
    email: "",
    telephone: "",
    taille: sizes[0],
    urgence: urgencies[0],
    objectif: "",
    accompagnement: supportTypes[0],
    budget: budgets[0],
  });

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function goToStep2(e: FormEvent) {
    e.preventDefault();
    setStep(2);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("backend unavailable");
      setStatus("sent-email");
      return;
    } catch {
      // Repli automatique : le backend n'est pas encore configuré (aucune clé API définie),
      // ou une erreur réseau est survenue. On ouvre un e-mail pré-rempli à la place.
    }

    const subject = `Demande de diagnostic — ${data.orgType} — ${data.secteur || "secteur non précisé"}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildSummary(data))}`;
    setStatus("sent-mailto");
  }

  if (status === "sent-email") {
    return (
      <div className="border border-line bg-paper-raised p-8 md:p-10">
        <h2 className="font-display text-2xl">Votre demande a été envoyée</h2>
        <p className="mt-3 max-w-lg text-ink-soft">
          Un consultant MEDEGNAN revient vers vous rapidement. Pour toute urgence, contactez-nous directement au{" "}
          {site.contact.phoneBenin} ou sur WhatsApp.
        </p>
      </div>
    );
  }

  if (status === "sent-mailto") {
    return (
      <div className="border border-line bg-paper-raised p-8 md:p-10">
        <h2 className="font-display text-2xl">Votre messagerie s&apos;est ouverte</h2>
        <p className="mt-3 max-w-lg text-ink-soft">
          Un e-mail pré-rempli avec vos réponses a été préparé à destination de <strong>{site.contact.email}</strong>.
          Envoyez-le pour finaliser votre demande. Si votre messagerie ne s&apos;est pas ouverte automatiquement,
          écrivez-nous directement à cette adresse, appelez le {site.contact.phoneBenin}, ou{" "}
          <a href={whatsappLink(buildSummary(data))} target="_blank" rel="noopener noreferrer" className="underline decoration-accent decoration-2 underline-offset-4">
            envoyez votre demande sur WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={step === 1 ? goToStep2 : handleSubmit} className="border border-line bg-paper p-6 md:p-10">
      <div className="mb-8 flex items-center gap-3 text-xs font-mono uppercase tracking-wide text-ink-faint">
        <span className={step === 1 ? "text-accent" : ""}>01 · Votre situation</span>
        <span aria-hidden="true">—</span>
        <span className={step === 2 ? "text-accent" : ""}>02 · Précisions & coordonnées</span>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-6">
          <div>
            <label className={labelClass} htmlFor="orgType">Type d&apos;organisation</label>
            <select id="orgType" className={fieldClass} value={data.orgType} onChange={(e) => update("orgType", e.target.value)}>
              {orgTypes.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="secteur">Secteur d&apos;activité</label>
              <input id="secteur" className={fieldClass} value={data.secteur} onChange={(e) => update("secteur", e.target.value)} placeholder="Ex. distribution, industrie, santé" />
            </div>
            <div>
              <label className={labelClass} htmlFor="pays">Pays</label>
              <input id="pays" className={fieldClass} value={data.pays} onChange={(e) => update("pays", e.target.value)} placeholder="Ex. Bénin" />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="probleme">Quel est le problème principal ?</label>
            <textarea id="probleme" className={fieldClass} rows={4} value={data.probleme} onChange={(e) => update("probleme", e.target.value)} placeholder="Décrivez en quelques lignes ce qui vous amène vers MEDEGNAN" required />
          </div>
          <button type="submit" className="mt-2 inline-flex w-fit items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/85">
            Continuer
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="taille">Taille de l&apos;organisation</label>
              <select id="taille" className={fieldClass} value={data.taille} onChange={(e) => update("taille", e.target.value)}>
                {sizes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="urgence">Niveau d&apos;urgence</label>
              <select id="urgence" className={fieldClass} value={data.urgence} onChange={(e) => update("urgence", e.target.value)}>
                {urgencies.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="objectif">Quel est votre objectif ?</label>
            <textarea id="objectif" className={fieldClass} rows={3} value={data.objectif} onChange={(e) => update("objectif", e.target.value)} placeholder="Ce que vous voulez atteindre à l'issue de l'accompagnement" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="accompagnement">Type d&apos;accompagnement recherché</label>
              <select id="accompagnement" className={fieldClass} value={data.accompagnement} onChange={(e) => update("accompagnement", e.target.value)}>
                {supportTypes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="budget">Budget indicatif (optionnel)</label>
              <select id="budget" className={fieldClass} value={data.budget} onChange={(e) => update("budget", e.target.value)}>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-xs text-ink-faint">
            Vous pourrez joindre un document (bilan, présentation, etc.) directement en réponse à notre e-mail de confirmation.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label className={labelClass} htmlFor="nom">Nom</label>
              <input id="nom" className={fieldClass} value={data.nom} onChange={(e) => update("nom", e.target.value)} required />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">Email</label>
              <input id="email" type="email" className={fieldClass} value={data.email} onChange={(e) => update("email", e.target.value)} required />
            </div>
            <div>
              <label className={labelClass} htmlFor="telephone">Téléphone</label>
              <input id="telephone" type="tel" className={fieldClass} value={data.telephone} onChange={(e) => update("telephone", e.target.value)} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center rounded-sm border border-ink/30 px-6 py-3 text-sm font-medium hover:bg-ink/5">
              Retour
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/85 disabled:opacity-60"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
            <a
              href={whatsappLink(buildSummary(data))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink/30 px-6 py-3 text-sm font-medium hover:bg-ink/5"
            >
              Envoyer sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
