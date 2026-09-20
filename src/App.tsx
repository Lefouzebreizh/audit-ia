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
  Cpu,
  Layers,
  Gauge
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

    setTimeout(() => {
      setResult({
        url: urlInput,
        globalScore: 71,
        verdict: "Fort potentiel de conversion, mais des freins psychologiques majeurs bloquent l'action.",
        metrics: {
          clarity: 84,
          hook: 72,
          trust: 54,
          cta: 68,
        },
        strengths: [
          "Proposition de valeur lisible au premier coup d'œil (above-the-fold)",
          "Temps de chargement et performance mobile optimaux",
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
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-stone-100 flex flex-col justify-between selection:bg-indigo-600 selection:text-white relative overflow-hidden font-sans">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[300px] right-[-100px] w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-stone-800/80 bg-stone-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-500/25">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight">Audit<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">IA</span></span>
              <p className="text-[10px] text-stone-400 font-mono tracking-wider uppercase">Conversion Scanner</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Moteur Neuromarketing v2.4
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Colonne de Gauche : Accroche + Formulaire */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-800 bg-stone-900/90 text-xs text-stone-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Audit algorithmique des 5 piliers de conversion
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              Détectez pourquoi vos visiteurs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300">
                quittent votre page sans acheter.
              </span>
            </h1>

            <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Analysez la clarté immédiate, les déclencheurs de confiance et la friction UX de votre offre. Obtenez une note sur 100 et un plan d'action chirurgical.
            </p>

            {/* Formulaire d'audit */}
            <form onSubmit={runAudit} className="p-4 rounded-3xl bg-stone-900/70 border border-stone-800/90 shadow-2xl backdrop-blur-xl space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    required
                    placeholder="https://votre-site.fr ou ma-page.vercel.app"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="py-3.5 px-4 rounded-2xl bg-stone-950 border border-stone-800 text-stone-300 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="artisan">Artisan / Travaux</option>
                  <option value="immo">Immobilier / Devis</option>
                  <option value="saas">SaaS / App Web</option>
                  <option value="ecommerce">E-commerce / Boutique</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:opacity-95 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {loading ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>Déconstruction heuristique de la page...</span>
                  </>
                ) : (
                  <>
                    <BarChart3 className="w-5 h-5" />
                    <span>Lancer le diagnostic de conversion</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center gap-6 pt-2 text-xs text-stone-400">
              <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-indigo-400" /> Score immédiat</span>
              <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-indigo-400" /> Audit UX & Ergonomie</span>
              <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-indigo-400" /> 0 cookie requis</span>
            </div>
          </div>

          {/* Colonne de Droite : Sphère Holographique 3D & Scanner */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              {/* Sphère lumineuse centrale 3D */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-950 via-indigo-900/40 to-cyan-900/50 border border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.25)] backdrop-blur-sm" />

              {/* Anneaux orbitaux 3D animés */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/40 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/30 animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-indigo-300/20 animate-pulse" />

              {/* Ligne laser / radar de scan horizontal */}
              <div className="absolute inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-bounce" />

              {/* Noyau central */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center mb-3 text-indigo-300 shadow-inner">
                  <Cpu className="w-8 h-8 animate-pulse" />
                </div>
                <div className="text-sm font-mono text-cyan-300 font-bold uppercase tracking-wider">Moteur Heuristique</div>
                <div className="text-xs text-stone-400 mt-1">Prêt pour l'indexation</div>
              </div>

              {/* Badges flottants holographiques */}
              <div className="absolute -top-3 -right-2 px-3 py-1.5 rounded-xl bg-stone-900/90 border border-indigo-500/40 text-[11px] font-mono text-indigo-300 shadow-xl backdrop-blur-md">
                CTA: <span className="text-emerald-400">Précis</span>
              </div>
              <div className="absolute -bottom-2 -left-3 px-3 py-1.5 rounded-xl bg-stone-900/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 shadow-xl backdrop-blur-md">
                Friction: <span className="text-amber-400">Faible</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section Résultats */}
        {result && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Score global */}
            <div className="p-8 rounded-3xl bg-stone-900/80 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">Rapport d'audit complet</span>
                <h3 className="text-2xl font-bold mt-1 text-white">{result.url}</h3>
                <p className="text-sm text-stone-400 mt-2 max-w-xl">{result.verdict}</p>
              </div>

              <div className="flex items-center gap-5 bg-stone-950 px-7 py-5 rounded-2xl border border-stone-800 shrink-0 shadow-inner">
                <div className="text-right">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-400">
                    {result.globalScore}/100
                  </div>
                  <span className="text-xs text-stone-400">Potentiel de conversion</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Métriques clés */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80">
                <span className="text-xs text-stone-400">Clarté au scroll 0</span>
                <div className="text-2xl font-bold text-white mt-1">{result.metrics.clarity}%</div>
              </div>
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80">
                <span className="text-xs text-stone-400">Impact de l'accroche</span>
                <div className="text-2xl font-bold text-white mt-1">{result.metrics.hook}%</div>
              </div>
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80">
                <span className="text-xs text-stone-400">Signaux de réassurance</span>
                <div className="text-2xl font-bold text-rose-400 mt-1">{result.metrics.trust}%</div>
              </div>
              <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80">
                <span className="text-xs text-stone-400">Clarté de l'Appel à l'action</span>
                <div className="text-2xl font-bold text-amber-400 mt-1">{result.metrics.cta}%</div>
              </div>
            </div>

            {/* Diagnostic Forces / Freins */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-stone-900/50 border border-emerald-950/60">
                <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Leviers déjà efficaces</span>
                </div>
                <ul className="space-y-3">
                  {result.strengths.map((s, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-stone-900/50 border border-rose-950/60">
                <div className="flex items-center gap-2 mb-4 text-rose-400 font-bold text-sm">
                  <ShieldAlert className="w-5 h-5" />
                  <span>Fuites de conversion critiques</span>
                </div>
                <ul className="space-y-3">
                  {result.blockers.map((b, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2.5">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommandations prioritaires */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-stone-900/90 to-stone-900 border border-indigo-800/40 shadow-xl">
              <div className="flex items-center gap-2 mb-5 text-indigo-400 font-bold text-sm">
                <Target className="w-5 h-5" />
                <span>3 Actions correctrices à déployer immédiatement</span>
              </div>
              <div className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 text-xs sm:text-sm text-stone-200 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 border border-indigo-500/30">
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

      {/* Footer */}
      <footer className="border-t border-stone-900 py-6 text-center text-xs text-stone-500">
        Audit IA • Moteur d'optimisation heuristique de taux de transformation
      </footer>
    </div>
  );
}
