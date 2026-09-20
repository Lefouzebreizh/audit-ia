import React, { useState } from 'react';
import {
  ShieldAlert,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Search,
  Sparkles,
  Target,
  Clock,
  TrendingUp
} from 'lucide-react';

interface AuditResult {
  url: string;
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

export default function App() {
  const [urlInput, setUrlInput] = useState('');
  const [niche, setNiche] = useState('artisan');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setLoading(true);
    setResult(null);

    // Simulation d'analyse heuristique instantanée
    setTimeout(() => {
      setResult({
        url: urlInput,
        globalScore: 68,
        verdict: "Fort potentiel de conversion, mais des freins psychologiques majeurs au passage à l'action.",
        metrics: {
          clarity: 82,
          hook: 70,
          trust: 55,
          cta: 65,
        },
        strengths: [
          "Proposition de valeur lisible au premier coup d'œil (above-the-fold)",
          "Temps de chargement et performance mobile satisfaisants",
          "Présence d'un formulaire direct de contact ou devis",
        ],
        blockers: [
          "Manque d'éléments de réassurance immédiats (avis vérifiés, labels, garanties explicites)",
          "Bouton d'appel à l'action trop générique (manque de formulation orientée bénéfice client)",
          "Absence de sentiment d'urgence ou de rareté dans l'offre",
        ],
        recommendations: [
          "Remplacer 'Envoyer' par 'Obtenir mon devis gratuit sous 24h'",
          "Ajouter 2 ou 3 témoignages clients avec photo ou localisation dès le 2e scroll",
          "Intégrer une garantie 'Sans engagement' juste sous le bouton principal",
        ],
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-indigo-600 selection:text-white">
      {/* Header */}
      <header className="border-b border-stone-800 bg-stone-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">Audit<span className="text-indigo-400">IA</span></span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono">
            v1.0 • Scanner de Conversion
          </span>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-800 bg-stone-900 text-xs text-stone-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Analyse psychologique & UX de vos pages de capture
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Détectez pourquoi vos visiteurs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400">
              ne passent pas à l'action.
            </span>
          </h1>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Entrez l'adresse de votre site vitrine ou page de capture. L'agent analyse votre proposition de valeur, vos freins de confiance et formule 3 actions prioritaires.
          </p>
        </div>

        {/* Input Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/80 border border-stone-800 shadow-2xl backdrop-blur-sm mb-10">
          <form onSubmit={runAudit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-3 relative">
                <Search className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  required
                  placeholder="https://mon-entreprise.fr ou ma-page.vercel.app"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="py-3.5 px-4 rounded-2xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="artisan">Artisan & Rénovation</option>
                <option value="immo">Immobilier & Estimation</option>
                <option value="saas">Outil / Produit Numérique</option>
                <option value="lead">Autre service local</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Audit des leviers en cours...</span>
                </>
              ) : (
                <>
                  <BarChart3 className="w-4 h-4" />
                  <span>Lancer le diagnostic de conversion</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results View */}
        {result && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Score Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase text-indigo-400">Rapport de Conversion</span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">{result.url}</h3>
                <p className="text-sm text-stone-400 mt-2 max-w-xl">{result.verdict}</p>
              </div>

              <div className="flex items-center gap-4 bg-stone-950 px-6 py-4 rounded-2xl border border-stone-800 shrink-0">
                <div className="text-right">
                  <div className="text-3xl font-black text-white">{result.globalScore}/100</div>
                  <span className="text-[11px] text-stone-400">Score global</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
                <span className="text-xs text-stone-400">Clarté de l'offre</span>
                <div className="text-2xl font-bold text-white mt-1">{result.metrics.clarity}%</div>
              </div>
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
                <span className="text-xs text-stone-400">Accroche (Hook)</span>
                <div className="text-2xl font-bold text-white mt-1">{result.metrics.hook}%</div>
              </div>
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
                <span className="text-xs text-stone-400">Indicateurs de confiance</span>
                <div className="text-2xl font-bold text-rose-400 mt-1">{result.metrics.trust}%</div>
              </div>
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800">
                <span className="text-xs text-stone-400">Force des CTA</span>
                <div className="text-2xl font-bold text-amber-400 mt-1">{result.metrics.cta}%</div>
              </div>
            </div>

            {/* Detailed Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="p-6 rounded-3xl bg-stone-900/50 border border-emerald-950/60">
                <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Points forts identifiés</span>
                </div>
                <ul className="space-y-3">
                  {result.strengths.map((s, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blockers */}
              <div className="p-6 rounded-3xl bg-stone-900/50 border border-rose-950/60">
                <div className="flex items-center gap-2 mb-4 text-rose-400 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Freins à la conversion</span>
                </div>
                <ul className="space-y-3">
                  {result.blockers.map((b, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2">
                      <span className="text-rose-500 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Priority Actions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-stone-900 to-stone-900 border border-indigo-800/40">
              <div className="flex items-center gap-2 mb-4 text-indigo-400 font-bold text-sm">
                <Target className="w-4 h-4" />
                <span>3 Optimisations à appliquer dès aujourd'hui</span>
              </div>
              <div className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 text-xs sm:text-sm text-stone-200 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-300 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
