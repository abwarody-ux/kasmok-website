import { useState } from 'react'

const SERVICES = [
  { icon: '🏧', name: 'ATM', desc: 'Déploiement et maintenance de distributeurs automatiques de billets, intégration multi-réseaux.' },
  { icon: '💳', name: 'POS', desc: 'Terminaux de paiement électronique pour commerces, certifiés Mastercard et UnionPay.' },
  { icon: '📲', name: 'Paybox', desc: 'Solutions de collecte et paiement digital pour entreprises et institutions.' },
  { icon: '🎮', name: 'Gaming Room Management', desc: 'Plateforme SaaS complète de gestion de salles de jeux PS4/PS5 — KASMOK Digital.' },
  { icon: '⛪', name: 'Church Management', desc: 'Système de gestion pour communautés religieuses — membres, finances, événements.' },
]

const STEPS = [
  { n: '01', title: 'Souscription', desc: 'Le propriétaire soumet sa demande via notre formulaire en ligne.' },
  { n: '02', title: 'KYC', desc: 'Vérification d\'identité et collecte des informations de la Gaming Room.' },
  { n: '03', title: 'Gaming Room active', desc: 'Validation, création de la GR, et mise en service immédiate.' },
]

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d14]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-lg tracking-[3px] uppercase">KASMOK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#how" className="hover:text-white transition-colors">Comment ça marche</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="https://gaming.kasmokgroup.com" className="text-xs bg-[#00e5ff]/10 hover:bg-[#00e5ff]/20 border border-[#00e5ff]/30 text-[#00e5ff] px-4 py-2 rounded-lg transition-colors tracking-widest uppercase font-bold">
            Accès Gaming
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,229,255,.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(124,58,237,.15) 0%, transparent 60%)' }}>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase px-4 py-1.5 rounded mb-8">
            KASMOK Group
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            La technologie à votre service<br className="hidden md:block" /> par des <span className="text-[#00e5ff]">professionnels</span> de la digitalisation
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Du déploiement d'infrastructures bancaires à la gestion digitale de vos espaces de divertissement, KASMOK Group accompagne votre transformation numérique en République Démocratique du Congo.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#contact" className="bg-[#00e5ff] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-[#00c4d9] transition-colors">
              Nous contacter
            </a>
            <a href="#services" className="border border-white/10 text-slate-300 px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-white/5 transition-colors">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Nos services</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">Une expertise multi-secteurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.name} className="bg-[#0f1320] border border-white/10 rounded-2xl p-8 hover:border-[#00e5ff]/30 transition-colors group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">{s.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#00e5ff]/10 to-[#7c3aed]/10 border border-[#00e5ff]/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="text-3xl mb-3">✨</div>
              <p className="text-slate-300 text-sm font-bold uppercase tracking-widest">Autres services à venir</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="how" className="py-24 px-6 border-t border-white/5 bg-[#0a0d14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Processus</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">Comment ça marche</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative">
                <div className="text-6xl font-black text-white/5 mb-2">{step.n}</div>
                <h3 className="text-xl font-bold mb-3 text-[#00e5ff]">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-2xl text-white/10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-[#00e5ff] mb-2">1+</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest">Gaming Rooms actives</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#a78bfa] mb-2">5+</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest">TVs connectées</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#10b981] mb-2">1</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest">Ville couverte</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/5 bg-[#0a0d14]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">Parlons de votre projet</h2>
            <p className="text-slate-400 mt-4">Une question, un projet de digitalisation ? Contactez-nous.</p>
          </div>

          {sent ? (
            <div className="bg-[#0f1320] border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-green-400 font-bold">Message envoyé avec succès !</p>
              <p className="text-slate-400 text-sm mt-2">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0f1320] border border-white/10 rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Nom complet</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Email</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]" placeholder="vous@email.com" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff] resize-none" placeholder="Décrivez votre projet..." />
              </div>
              <button type="submit" className="w-full bg-[#00e5ff] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-[#00c4d9] transition-colors">
                Envoyer le message
              </button>
              <p className="text-center text-slate-500 text-xs">Ou écrivez-nous directement à <a href="mailto:contact@kasmokgroup.com" className="text-[#00e5ff] hover:underline">contact@kasmokgroup.com</a></p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#00e5ff]"></div>
          <span className="font-black text-sm tracking-[3px] uppercase">KASMOK</span>
        </div>
        <p className="text-slate-600 text-xs">© KASMOK Group 2026 · Kinshasa, RDC</p>
      </footer>
    </div>
  )
}
