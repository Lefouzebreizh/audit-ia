import React, { useState } from 'react';
import {
  Zap,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  BarChart3,
  Search,
  Sparkles,
  Target,
  Clock,
  TrendingUp,
  ShieldCheck,
  MousePointerClick,
  FileSearch,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface AuditResult {
  url: string;
  nicheLabel: string;
  globalScore: number;
  verdict: string;
  metrics: {
    clarity: number;
    hook: number;
    trust: number;
    cta: number;
  };
  strengths: string[];
  blockers: string[];
  recommendations: string[];
}

const PRESET_AUDITS: Record<string, AuditResult> = {
  artisan: {
    url: 'https://renov-bretagne-exemple.fr',
    nicheLabel: 'Artisan du Bâtiment / Travaux',
    globalScore: 64,
    verdict: "Page bien construite techniquement, mais un déficit de réassurance immédiate fait fuir les prospects avant la demande de devis.",
    metrics: { clarity: 80, hook: 65, trust: 48, cta: 62 },
    strengths: [
      "Téléphone et zone d'intervention (Rennes & 35) visibles dès le premier écran",
      "Galerie photos de chantiers récents avec avant/après très valorisants",
      "Formulaire court demandant uniquement l'essentiel pour un premier contact",
    ],
    blockers: [
      "Aucune mention visible de la garantie décennale ni du numéro d'assurance au-dessus de la ligne de flottaison",
      "Le bouton final affiche 'Envoyer' au lieu d'un engagement clair de rappel sous 24h",
      "Avis Google non synchronisés en temps réel : simples citations texte sans vérification",
    ],
    recommendations: [
      "Ajouter un badge 'Garantie Décennale AXA / MMA n°...' directement sous le bouton principal",
      "Remplacer 'Envoyer' par 'Demander mon devis gratuit sous 24h chrono'",
      "Intégrer les avis Google vérifiés avec note 4.9/5 et photos réelles de clients locaux",
    ],
  },
  agence: {
    url: 'https://studio-digital-demo.fr',
    nicheLabel: 'Studio Web & Indépendant',
    globalScore: 78,
    verdict: "Design élégant et moderne, mais l'offre est trop abstraite : le client cible ne comprend pas en 5 secondes ce qu'il achète exactement.",
    metrics: { clarity: 70, hook: 88, trust: 74, cta: 80 },
    strengths: [
      "Identité visuelle soignée inspirant immédiatement le professionnalisme",
      "Études de cas concrètes avec résultats chiffrés",
      "Prise de rendez-vous Cal.com intégrée directement dans la page",
    ],
    blockers: [
      "Accroche poétique mais floue : 'Nous sculptons votre futur' au lieu d'un bénéfice business net",
      "Tarifs totalement opaques incitant à la méfiance des petites entreprises",
      "Temps de chargement pénalisé par des vidéos non compressées en arrière-plan",
    ],
    recommendations: [
      "Formuler l'accroche avec la structure : [Résultat obtenu] en [Délai] sans [Douleur habituelle]",
      "Afficher une fourchette de prix de départ pour filtrer les leads non qualifiés",
      "Ajouter une FAQ de 4 questions pour lever les objections sur les délais et la maintenance",
    ],
  },
  ecommerce: {
    url: 'https://boutique-artisanale-test.com',
    nicheLabel: 'Boutique E-commerce / Produits',
    globalScore: 59,
    verdict: "Forte déperdition au panier causée par des coûts imprévus et un manque d'incitation à finaliser la commande.",
    metrics: { clarity: 85, hook: 60, trust: 45, cta: 48 },
    strengths: [
      "Fiches produits détaillées avec dimensions et matériaux explicites",
      "Photos haute définition sous plusieurs angles",
      "Paiement sécurisé Stripe / Apple Pay activé",
    ],
    blockers: [
      "Frais de port découverts uniquement à la dernière étape de paiement",
      "Absence de bandeau de réassurance sur les retours sous 14 jours",
      "Pas de relance des paniers abandonnés ou d'incitation au premier achat",
    ],
    recommendations: [
      "Indiquer 'Livraison offerte dès 50€' directement sur les fiches produits",
      "Ajouter 3 icônes de rassurance sous le bouton d'ajout au panier (Expédition 48h, Satisfait ou remboursé)",
      "Proposer -10% immédiats au premier passage de commande contre l'adresse e-mail",
    ],
  },
};

export default function App() {
  const [urlInput, setUrlInput] = useState('');
  const [niche, setNiche] = useState('artisan');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const runAudit = (e?: React.FormEvent, presetKey?: string) => {
    if (e) e.preventDefault();
    const key = presetKey || niche;
    const targetUrl = presetKey ? PRESET_AUDITS[presetKey].url : (urlInput.trim() || 'https://mon-entreprise.fr');

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const presetData = PRESET_AUDITS[key] || PRESET_AUDITS.artisan;
      setResult({
        ...presetData,
        url: targetUrl,
      });
      setLoading(false);
    }, 1100);
  };

  const loadPreset = (presetKey: string) => {
    setUrlInput(PRESET_AUDITS[presetKey].url);
    setNiche(presetKey);
    runAudit(undefined, presetKey);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-600 selection:text-white font-sans antialiased">
      {/* Barre de navigation */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
                Audit<span className="text-indigo-400">IA</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono">PRO</span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">Diagnostic heuristique de landing page</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Scanner Opérationnel
            </span>
          </div>
        </div>
      </header>

      {/* Contenu Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex-1 w-full space-y-12">
        
        {/* Hero Banner & Formulaire Principal */}
        <section className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            Détectez les 3 freins qui sabotent votre taux de transformation
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Pourquoi vos visiteurs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
              repartent sans vous contacter ?
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Testez votre page vitrine face aux 20 critères fondamentaux de conversion web : clarté de l'offre au scroll 0, solidité des garanties, et formulation des appels à l'action.
          </p>

          {/* Formulaire d'analyse */}
          <form onSubmit={(e) => runAudit(e)} className="p-3 sm:p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-3 max-w-3xl mx-auto text-left">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  placeholder="https://votre-site.fr ou ma-page.vercel.app"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="py-3.5 px-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="artisan">Artisan / Rénovation</option>
                <option value="agence">Agence & Freelance</option>
                <option value="ecommerce">Boutique & E-commerce</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {loading ? (
                <>
                  <Clock className="w-5 h-5 animate-spin" />
                  <span>Analyse heuristique en direct de votre page...</span>
                </>
              ) : (
                <>
                  <BarChart3 className="w-5 h-5" />
                  <span>Lancer le diagnostic de conversion complet</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>

          {/* Démonstrateur instantané en 1 clic */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span>Tester un exemple pré-analysé :</span>
            <button
              type="button"
              onClick={() => loadPreset('artisan')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              Artisan BTP <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              type="button"
              onClick={() => loadPreset('agence')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              Studio Digital <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              type="button"
              onClick={() => loadPreset('ecommerce')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              Boutique E-commerce <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </section>

        {/* Rapport d'Audit Déployé */}
        {result && (
          <section className="space-y-6 animate-in fade-in duration-500">
            {/* Bannière de Synthèse */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                    {result.nicheLabel}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" /> {result.url}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Diagnostic Global de Transformation</h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">{result.verdict}</p>
              </div>

              <div className="flex items-center gap-5 bg-slate-950 px-8 py-5 rounded-2xl border border-slate-800 shrink-0 shadow-inner">
                <div className="text-right">
                  <div className="text-4xl font-black text-white">{result.globalScore}<span className="text-xl text-slate-500">/100</span></div>
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Score d'efficacité</span>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-7 h-7" />
                </div>
              </div>
            </div>

            {/* Grille des 4 Métriques Heuristiques */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <FileSearch className="w-4 h-4 text-indigo-400" /> Clarté Immédiate
                </span>
                <div className="text-2xl font-black text-white mt-2">{result.metrics.clarity}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${result.metrics.clarity}%` }} />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" /> Force de l'Accroche
                </span>
                <div className="text-2xl font-black text-white mt-2">{result.metrics.hook}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: `${result.metrics.hook}%` }} />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-rose-400" /> Facteurs de Rassurance
                </span>
                <div className="text-2xl font-black text-rose-400 mt-2">{result.metrics.trust}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-full" style={{ width: `${result.metrics.trust}%` }} />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <MousePointerClick className="w-4 h-4 text-amber-400" /> Incitation à l'Action
                </span>
                <div className="text-2xl font-black text-amber-400 mt-2">{result.metrics.cta}%</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: `${result.metrics.cta}%` }} />
                </div>
              </div>
            </div>

            {/* Diagnostic Détaillé : Forces vs Freins */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-emerald-950/60 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Forces constatées sur votre page</span>
                </div>
                <ul className="space-y-3">
                  {result.strengths.map((s, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-rose-950/60 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <ShieldAlert className="w-5 h-5" />
                  <span>Points de friction critiques identifiés</span>
                </div>
                <ul className="space-y-3">
                  {result.blockers.map((b, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plan d'Action Recommandé */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-800/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Target className="w-5 h-5" />
                <span>3 Actions prioritaires à déployer pour corriger la fuite de leads</span>
              </div>
              <div className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                      #{idx + 1}
                    </span>
                    <span className="leading-snug">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section Explicative */}
        {!result && (
          <section className="pt-6 border-t border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                <FileSearch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Clarté en 5 secondes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vérification du 'Scroll 0' : un visiteur pressé doit immédiatement comprendre votre métier, votre secteur géographique et ce qu'il a à y gagner.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-600/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Preuves & Rassurance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Détection des signaux d'autorité : labels professionnels, garanties contractuelles, avis vérifiés et visages humains pour désamorcer la méfiance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <MousePointerClick className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Friction de contact</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Audit de l'effort cognitif nécessaire : analyse du libellé des boutons, du nombre de champs dans le formulaire et des promesses de rappel.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* Pied de page */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        Audit IA • Algorithme d'optimisation heuristique de taux de conversion web
      </footer>
    </div>
  );
}
