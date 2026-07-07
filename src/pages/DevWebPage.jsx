import { useState } from 'react'
import { Link } from 'react-router-dom'

const BUDGETS = [
  '< 200 USD', '200 - 500 USD', '500 - 1 000 USD', '1 000 - 2 000 USD',
  '2 000 - 5 000 USD', '5 000 - 10 000 USD', '10 000 - 20 000 USD',
  '20 000 - 50 000 USD', '50 000 - 100 000 USD', '100 000 - 500 000 USD', '+ 500 000 USD'
]

const STEPS = ['Identite', 'Projet', 'Fonctionnalites', 'Budget', 'Recapitulatif']

export default function DevWebPage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '', sector: '', city: '',
    types: [], description: '', existing: '', existing_url: '',
    features: [], users: '', other_features: '',
    budget: 2, delay: '', tech: [], hosting: '',
    source: '', message: '', contact: ''
  })

  const set = (key, val) => setForm(p => ({ ...p, [key]: val }))
  const toggle = (key, val) => setForm(p => ({
    ...p, [key]: p[key].includes(val) ? p[key].filter(x => x !== val) : [...p[key], val]
  }))

  const validate = () => {
    if (step === 0 && (!form.name || !form.phone || !form.email || !form.sector || !form.city)) {
      alert('Veuillez remplir tous les champs obligatoires'); return false
    }
    if (step === 1 && (form.types.length === 0 || !form.description)) {
      alert('Selectionnez un type et decrivez votre projet'); return false
    }
    if (step === 4 && !form.contact) {
      alert('Selectionnez un mode de contact'); return false
    }
    return true
  }

  const next = () => { if (validate()) setStep(s => s + 1) }
  const prev = () => setStep(s => s - 1)

  const submit = () => {
    if (!validate()) return
    const msg = `NOUVELLE DEMANDE — KASMOK Dev Web

Client: ${form.name} | ${form.phone} | ${form.email}
Entreprise: ${form.company || 'N/A'} | Secteur: ${form.sector} | Ville: ${form.city}

Projet: ${form.types.join(', ')}
Description: ${form.description}
Site existant: ${form.existing}

Fonctionnalites: ${form.features.join(', ')}
Utilisateurs: ${form.users}

Budget: ${BUDGETS[form.budget]} | Delai: ${form.delay}
Technologie: ${form.tech.join(', ')} | Hebergement: ${form.hosting}

Contact prefere: ${form.contact}
Source: ${form.source}
Message: ${form.message || 'Aucun'}`

    window.open('https://wa.me/243816668515?text=' + encodeURIComponent(msg), '_blank')
    setSubmitted(true)
  }

  const s = { input: 'w-full bg-[#0f1320] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]/40 transition-colors' }

  const CheckOpt = ({ label, sub, value, field }) => (
    <div onClick={() => toggle(field, value)}
      className={`cursor-pointer border rounded-xl p-3 transition-all ${form[field].includes(value) ? 'border-[#00e5ff]/40 bg-[#00e5ff]/08' : 'border-white/10 bg-[#0f1320]'}`}>
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center text-xs font-black ${form[field].includes(value) ? 'bg-[#00e5ff] text-black' : 'border border-white/20'}`}>
          {form[field].includes(value) ? '✓' : ''}
        </div>
        <div>
          <div className="text-sm font-semibold">{label}</div>
          {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
        </div>
      </div>
    </div>
  )

  const RadioOpt = ({ label, value, field }) => (
    <div onClick={() => set(field, value)}
      className={`cursor-pointer border rounded-xl p-3 flex items-center gap-3 transition-all ${form[field] === value ? 'border-[#00e5ff]/40 bg-[#00e5ff]/08' : 'border-white/10 bg-[#0f1320]'}`}>
      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${form[field] === value ? 'border-[#00e5ff] bg-[#00e5ff]' : 'border-white/20'}`}>
        {form[field] === value && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )

  if (submitted) return (
    <div className="min-h-screen bg-[#0a0d14] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
        <h2 className="text-3xl font-black mb-4">Demande envoyee !</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">Notre equipe va analyser votre projet et vous contactera dans les 24h pour discuter de la meilleure solution.</p>
        <div className="bg-[#0f1320] border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <div className="text-xs text-[#00e5ff] font-black uppercase tracking-widest mb-4">Prochaines etapes</div>
          <div className="space-y-3 text-sm text-slate-400">
            <div>📞 <strong className="text-white">Etape 1</strong> — Appel de qualification (30 min)</div>
            <div>📋 <strong className="text-white">Etape 2</strong> — Proposition technique et devis</div>
            <div>🚀 <strong className="text-white">Etape 3</strong> — Demarrage du developpement</div>
          </div>
        </div>
        <Link to="/" className="text-slate-400 text-sm hover:text-white transition-colors">← Retour au site</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d14]/80 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-sm tracking-[3px] uppercase">KASMOK</span>
          </Link>
          <span className="text-xs text-slate-500">Etape {step + 1} / {STEPS.length}</span>
        </div>
      </nav>

      {/* PROGRESS BAR */}
      <div className="fixed top-[57px] left-0 right-0 z-40 bg-[#0a0d14] border-b border-white/5 px-6 py-3">
        <div className="max-w-4xl mx-auto flex gap-1">
          {STEPS.map((s, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i <= step ? 'bg-[#00e5ff]' : 'bg-white/10'}`}></div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">

        {/* STEP 0 — IDENTITE */}
        {step === 0 && (
          <div>
            <div className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase mb-3">Etape 1 — Votre identite</div>
            <h2 className="text-3xl font-black mb-2">Qui etes-vous ?</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">Ces informations nous permettent de vous contacter et de personnaliser notre approche.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Nom complet *</label>
                  <input className={s.input} placeholder="Jean Mukeba" value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Telephone *</label>
                  <input className={s.input} placeholder="+243 8XX XXX XXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Email *</label>
                  <input className={s.input} type="email" placeholder="jean@monentreprise.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Entreprise</label>
                  <input className={s.input} placeholder="Mon Entreprise SARL" value={form.company} onChange={e => set('company', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Secteur *</label>
                  <select className={s.input} value={form.sector} onChange={e => set('sector', e.target.value)}>
                    <option value="">Selectionner...</option>
                    {['Commerce', 'Hotellerie', 'Sante', 'Education', 'Finance', 'Transport', 'Immobilier', 'ONG', 'Eglise', 'Divertissement', 'Agriculture', 'Autre'].map(x => <option key={x}>{x}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Ville *</label>
                  <select className={s.input} value={form.city} onChange={e => set('city', e.target.value)}>
                    <option value="">Selectionner...</option>
                    {['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Goma', 'Kisangani', 'Bukavu', 'Kananga', 'Matadi', 'Autre'].map(x => <option key={x}>{x}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1 — PROJET */}
        {step === 1 && (
          <div>
            <div className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase mb-3">Etape 2 — Votre projet</div>
            <h2 className="text-3xl font-black mb-2">De quoi avez-vous besoin ?</h2>
            <p className="text-slate-400 text-sm mb-8">Selectionnez le(s) type(s) de solution souhaites.</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Site web vitrine', sub: 'Presentation activite', v: 'Site web vitrine' },
                { label: 'E-commerce', sub: 'Vente en ligne', v: 'E-commerce' },
                { label: 'Application web', sub: 'Gestion, SaaS, plateforme', v: 'Application web sur mesure' },
                { label: 'Application mobile', sub: 'Android / iOS', v: 'Application mobile' },
                { label: 'Systeme de gestion', sub: 'ERP / CRM / Facturation', v: 'ERP/CRM' },
                { label: 'Refonte existant', sub: 'Moderniser votre site', v: 'Refonte' },
                { label: 'Dashboard', sub: 'Tableaux de bord', v: 'Dashboard' },
                { label: 'API / Integration', sub: 'Connecter vos systemes', v: 'API' },
              ].map(({ label, sub, v }) => <CheckOpt key={v} label={label} sub={sub} value={v} field="types" />)}
            </div>
            <div className="mb-4">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Description du projet *</label>
              <textarea className={s.input + ' resize-none'} rows={4} placeholder="Decrivez precisement ce que vous souhaitez..." value={form.description} onChange={e => set('description', e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Site existant ?</label>
              <div className="grid grid-cols-3 gap-3">
                {['Non, nouveau projet', 'Oui, a ameliorer', 'Oui, a refaire'].map(v => <RadioOpt key={v} label={v} value={v} field="existing" />)}
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">URL existante (si applicable)</label>
              <input className={s.input} placeholder="https://monsite.com" value={form.existing_url} onChange={e => set('existing_url', e.target.value)} />
            </div>
          </div>
        )}

        {/* STEP 2 — FONCTIONNALITES */}
        {step === 2 && (
          <div>
            <div className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase mb-3">Etape 3 — Fonctionnalites</div>
            <h2 className="text-3xl font-black mb-2">Que doit faire votre solution ?</h2>
            <p className="text-slate-400 text-sm mb-8">Selectionnez toutes les fonctionnalites souhaitees.</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Authentification', sub: 'Comptes, login, roles', v: 'Authentification' },
                { label: 'Gestion de contenu', sub: 'Modifier sans coder', v: 'CMS' },
                { label: 'Paiement en ligne', sub: 'Mobile money, carte', v: 'Paiement' },
                { label: 'Gestion des stocks', sub: 'Inventaire, alertes', v: 'Stocks' },
                { label: 'Facturation', sub: 'Devis, factures, rapports', v: 'Facturation' },
                { label: 'Reservations', sub: 'Agenda, rendez-vous', v: 'Reservations' },
                { label: 'Notifications', sub: 'SMS, email automatiques', v: 'Notifications' },
                { label: 'Rapports & Stats', sub: 'Dashboards, exports', v: 'Rapports' },
                { label: 'Chat / Messagerie', sub: 'Communication interne', v: 'Chat' },
                { label: 'Gestion RH', sub: 'Employes, presences', v: 'RH' },
                { label: 'Geolocalisation', sub: 'Cartes, livraison', v: 'Geo' },
                { label: 'Multi-langue', sub: 'FR / EN / Lingala', v: 'Multi-langue' },
                { label: 'Mode hors-ligne', sub: 'Sans internet', v: 'Hors-ligne' },
                { label: 'API publique', sub: 'Integration tierce', v: 'API' },
              ].map(({ label, sub, v }) => <CheckOpt key={v} label={label} sub={sub} value={v} field="features" />)}
            </div>
            <div className="mb-4">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Nombre d utilisateurs</label>
              <div className="grid grid-cols-2 gap-3">
                {['1-10', '10-100', '100-1000', '+1000'].map(v => <RadioOpt key={v} label={v} value={v} field="users" />)}
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Autres fonctionnalites</label>
              <textarea className={s.input + ' resize-none'} rows={3} placeholder="Fonctionnalites non listees ci-dessus..." value={form.other_features} onChange={e => set('other_features', e.target.value)} />
            </div>
          </div>
        )}

        {/* STEP 3 — BUDGET */}
        {step === 3 && (
          <div>
            <div className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase mb-3">Etape 4 — Budget et delais</div>
            <h2 className="text-3xl font-black mb-2">Vos contraintes</h2>
            <p className="text-slate-400 text-sm mb-8">Ces informations nous aident a calibrer la solution adaptee.</p>
            <div className="mb-8">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-4">Budget envisage *</label>
              <div className="text-4xl font-black text-[#00e5ff] text-center mb-2">{BUDGETS[form.budget]}</div>
              <input type="range" min="0" max="10" value={form.budget} onChange={e => set('budget', parseInt(e.target.value))}
                className="w-full accent-[#00e5ff]" />
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>Petit budget</span><span>Moyen</span><span>Grand projet</span>
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Delai souhaite *</label>
              <div className="grid grid-cols-2 gap-3">
                {['Urgent (-1 mois)', '1 a 3 mois', '3 a 6 mois', '+6 mois', 'Pas de contrainte'].map(v => <RadioOpt key={v} label={v} value={v} field="delay" />)}
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Preference technologique</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'WordPress', v: 'WordPress' },
                  { label: 'React / Next.js', v: 'React' },
                  { label: 'React Native (mobile)', v: 'React Native' },
                  { label: 'Recommandez-moi', v: 'Peu importe' },
                ].map(({ label, v }) => <CheckOpt key={v} label={label} value={v} field="tech" />)}
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Hebergement et maintenance</label>
              <div className="grid grid-cols-3 gap-3">
                {['Oui, tout inclus', 'Non, j ai deja', 'A discuter'].map(v => <RadioOpt key={v} label={v} value={v} field="hosting" />)}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 — RECAPITULATIF */}
        {step === 4 && (
          <div>
            <div className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase mb-3">Etape 5 — Recapitulatif</div>
            <h2 className="text-3xl font-black mb-2">Verifiez vos informations</h2>
            <p className="text-slate-400 text-sm mb-6">Relisez avant d envoyer.</p>
            <div className="bg-[#0f1320] border border-white/10 rounded-2xl p-5 mb-4">
              <div className="text-xs text-[#00e5ff] font-black uppercase tracking-widest mb-3">Vos coordonnees</div>
              {[['Nom', form.name], ['Tel', form.phone], ['Email', form.email], ['Secteur', form.sector], ['Ville', form.city]].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm py-2 border-b border-white/5 last:border-0">
                  <span className="text-slate-500">{k}</span><span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#0f1320] border border-white/10 rounded-2xl p-5 mb-4">
              <div className="text-xs text-[#00e5ff] font-black uppercase tracking-widest mb-3">Votre projet</div>
              {[['Type', form.types.join(', ')], ['Budget', BUDGETS[form.budget]], ['Delai', form.delay]].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm py-2 border-b border-white/5 last:border-0">
                  <span className="text-slate-500">{k}</span><span className="font-semibold text-right max-w-[60%]">{v}</span>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Comment avez-vous connu KASMOK ?</label>
              <select className={s.input} value={form.source} onChange={e => set('source', e.target.value)}>
                <option value="">Selectionner...</option>
                {['Reseaux sociaux', 'Recommandation', 'Google', 'Client KASMOK existant', 'Autre'].map(x => <option key={x}>{x}</option>)}
              </select>
            </div>
            <div className="mb-6">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Message complementaire</label>
              <textarea className={s.input + ' resize-none'} rows={3} placeholder="Tout ce que vous souhaitez ajouter..." value={form.message} onChange={e => set('message', e.target.value)} />
            </div>
            <div className="mb-2">
              <label className="text-xs text-slate-500 uppercase tracking-widest font-bold block mb-2">Mode de contact prefere *</label>
              <div className="grid grid-cols-2 gap-3">
                {['WhatsApp', 'Email', 'Appel telephonique', 'En personne'].map(v => <RadioOpt key={v} label={v} value={v} field="contact" />)}
              </div>
            </div>
          </div>
        )}

        {/* NAVIGATION */}
        <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
          {step > 0
            ? <button onClick={prev} className="border border-white/10 text-slate-400 px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">← Retour</button>
            : <Link to="/" className="border border-white/10 text-slate-400 px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">← Site</Link>
          }
          {step < 4
            ? <button onClick={next} className="bg-[#00e5ff] text-black font-black px-8 py-3 rounded-xl text-sm uppercase tracking-widest hover:bg-[#00c4d9] transition-colors">Suivant →</button>
            : <button onClick={submit} className="bg-[#10b981] text-black font-black px-8 py-3 rounded-xl text-sm uppercase tracking-widest hover:bg-[#0da672] transition-colors">Envoyer ma demande ✅</button>
          }
        </div>
      </div>
    </div>
  )
}