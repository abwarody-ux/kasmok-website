import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SERVICES = [
  { icon: '🏧', name: 'ATM', desc: 'Déploiement et maintenance de distributeurs automatiques de billets, intégration multi-réseaux.' },
  { icon: '💳', name: 'POS', desc: 'Terminaux de paiement électronique pour commerces, certifiés Mastercard et UnionPay.' },
  { icon: '📲', name: 'Paybox', desc: 'Solutions de collecte et paiement digital pour entreprises et institutions.' },
  { icon: '🎮', name: 'Gaming Room Management', desc: 'Plateforme SaaS complète de gestion de salles de jeux PS4/PS5 — KASMOK Digital.' },
  { icon: '⛪', name: 'Church Management', desc: 'Système de gestion pour communautés religieuses — membres, finances, événements.' },
  { icon: '💻', name: "Développement d'Applications", desc: "Conception et développement d'applications web et mobiles sur mesure pour entreprises et institutions." },
]

const STEPS = [
  { n: '01', title: 'Souscription', desc: "Le propriétaire soumet sa demande via notre formulaire en ligne." },
  { n: '02', title: 'KYC', desc: "Vérification d'identité et collecte des informations de la Gaming Room." },
  { n: '03', title: 'Gaming Room active', desc: 'Validation, création de la GR, et mise en service immédiate.' },
]

const API = 'https://api.kasmokgroup.com'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [stats, setStats] = useState({ active_gaming_rooms: 1, total_tvs: 5, cities_covered: 1 })

  useEffect(() => {
    fetch(`${API}/kasmok/gaming-rooms/public-stats`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {})
  }, [])
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://api.kasmokgroup.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch (e) {
      setError("Erreur lors de l'envoi. Réessayez ou écrivez-nous directement.")
    } finally {
      setSending(false)
    }
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
              <div key={s.name} className="bg-[#0f1320] border border-white/10 rounded-2xl p-8 hover:border-[#00e5ff]/30 transition-colors group flex flex-col">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">{s.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                {s.name === 'Gaming Room Management' && (
                  <Link to="/souscrire-gaming-room" className="mt-4 inline-flex items-center gap-2 text-[#00e5ff] text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                    Souscrire →
                  </Link>
                )}
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


      {/* GAMING ROOM SHOWCASE */}
      <section id="gaming-room" className="py-24 px-6 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">KASMOK Digital</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">
              Gerez votre Gaming Room<br className="hidden md:block" />
              <span className="text-[#00e5ff]">comme un pro</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Plateforme SaaS complete — sessions PS4/PS5, comptabilite, rapports EOD, file d attente temps reel. Tout pour maximiser vos revenus.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: '🎮', label: 'Sessions PS4/PS5', desc: 'Timer precis par TV' },
              { icon: '💰', label: 'Comptabilite auto', desc: 'EOD en 1 clic' },
              { icon: '📊', label: 'Rapports temps reel', desc: 'Revenus et charges' },
              { icon: '📡', label: 'Monitoring TV', desc: 'File attente live' },
            ].map((f, i) => (
              <div key={i} className="bg-[#0f1320] border border-white/10 rounded-2xl p-5 text-center hover:border-[#00e5ff]/30 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-bold text-sm mb-1">{f.label}</div>
                <div className="text-slate-500 text-xs">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <div className="bg-[#0f1320] border border-[#00e5ff]/20 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Vue Manager</span>
                  <h3 className="text-2xl font-black mt-2 mb-4">Controle total des sessions</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Le Manager supervise toutes les TVs en temps reel. Chaque session demarre sur validation manuelle. Timer precis, pause, reprise, bonus minutes.</p>
                  <div className="space-y-3">
                    {['Demarrage sur validation Manager', 'Pause et reprise de session HOLD', 'Bonus minutes +1/+2/+5 min', 'Transfert et reservation de minutes'].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-[#00e5ff]">✓</span><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-[#070b14] rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                      <span className="text-[#00e5ff] font-black tracking-widest text-xs uppercase">Sessions Manager</span>
                      <span className="text-slate-500 text-xs">KMD-KIN-ARM01</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { tv: 'TV 01', type: 'PS5', status: 'ACTIVE', time: '01:24:33', color: '#10b981' },
                        { tv: 'TV 02', type: 'PS4', status: 'ACTIVE', time: '00:45:12', color: '#10b981' },
                        { tv: 'TV 03', type: 'PS5', status: 'WAITING', time: '--:--', color: '#f59e0b' },
                        { tv: 'TV 04', type: 'PS4', status: 'FREE', time: '--:--', color: '#475569' },
                      ].map((tv, i) => (
                        <div key={i} className="bg-[#0f1320] rounded-xl p-3 border" style={{ borderColor: tv.color + '40' }}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-black text-white text-xs">{tv.tv}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: tv.color + '20', color: tv.color }}>{tv.status}</span>
                          </div>
                          <div className="text-slate-400 text-xs mb-1">{tv.type}</div>
                          <div className="font-black text-lg" style={{ color: tv.color }}>{tv.time}</div>
                          {tv.status === 'WAITING' && <button className="mt-2 w-full text-xs bg-[#00e5ff] text-black font-black py-1 rounded-lg">START</button>}
                          {tv.status === 'ACTIVE' && <button className="mt-2 w-full text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 font-bold py-1 rounded-lg">HOLD</button>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0f1320] border border-[#a78bfa]/20 rounded-3xl p-6">
                <span className="text-[#a78bfa] text-xs font-mono tracking-[3px] uppercase">Vue Caissier</span>
                <h3 className="text-xl font-black mt-2 mb-3">Guichet de vente</h3>
                <p className="text-slate-400 text-sm mb-4">Vente tickets, remboursements avec retenue 30%, file VIP automatique.</p>
                <div className="bg-[#070b14] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Nouvelle vente</div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {['PS4 30min 1000 CDF', 'PS4 1h 2000 CDF', 'PS5 30min 1500 CDF', 'PS5 1h 3000 CDF'].map((t, i) => (
                      <div key={i} className={i===2 ? 'bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg p-2 text-xs text-[#a78bfa] font-bold' : 'bg-[#0f1320] border border-white/10 rounded-lg p-2 text-xs text-slate-400'}>{t}</div>
                    ))}
                  </div>
                  <div className="bg-[#a78bfa] text-black font-black text-xs py-2 rounded-lg text-center">VENDRE 1 500 CDF</div>
                </div>
              </div>
              <div className="bg-[#0f1320] border border-[#f59e0b]/20 rounded-3xl p-6">
                <span className="text-[#f59e0b] text-xs font-mono tracking-[3px] uppercase">Vue Financier</span>
                <h3 className="text-xl font-black mt-2 mb-3">Rapport EOD automatique</h3>
                <p className="text-slate-400 text-sm mb-4">Cloture journaliere en 1 clic. Rapport envoye par email automatiquement.</p>
                <div className="bg-[#070b14] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Resume du jour</div>
                  <div className="space-y-2 mb-3">
                    {[
                      { label: 'Total Revenus', value: '185 000 CDF', color: '#10b981' },
                      { label: 'Total Charges', value: '12 500 CDF', color: '#ef4444' },
                      { label: 'Resultat Net', value: '172 500 CDF', color: '#00e5ff' },
                      { label: 'Sessions', value: '24 sessions', color: '#a78bfa' },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-slate-400">{r.label}</span>
                        <span className="font-black" style={{ color: r.color }}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg py-2 text-center text-xs font-black text-[#f59e0b]">Rapport EOD envoye par email</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0f1320] to-[#070b14] border border-[#10b981]/20 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 w-full">
                  <div className="bg-[#070b14] rounded-2xl p-5 border border-white/10">
                    <div className="text-center mb-4">
                      <div className="text-[#00e5ff] font-black text-xs tracking-widest uppercase mb-1">File d attente en direct</div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { pos: 1, ticket: 'TKT-007', type: 'PS5', min: 120, vip: true },
                        { pos: 2, ticket: 'TKT-008', type: 'PS4', min: 60, vip: false },
                        { pos: 3, ticket: 'TKT-009', type: 'PS5', min: 30, vip: false },
                      ].map((q, i) => (
                        <div key={i} className="flex items-center gap-3 bg-[#0f1320] rounded-xl p-3 border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] font-black text-sm">{q.pos}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm">{q.ticket}</span>
                              {q.vip && <span className="text-xs bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 px-2 py-0.5 rounded-full font-bold">VIP</span>}
                            </div>
                            <div className="text-slate-500 text-xs">{q.type} {q.min} min</div>
                          </div>
                          <div className="text-[#00e5ff] font-black text-sm">{q.min} min</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-[#10b981] text-xs font-mono tracking-[3px] uppercase">Monitoring temps reel</span>
                  <h3 className="text-2xl font-black mt-2 mb-4">File d attente intelligente</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Un ecran TV dans votre salle affiche la file en temps reel. Les clients VIP (+120 min) passent automatiquement en priorite.</p>
                  <div className="space-y-3">
                    {['Mise a jour WebSocket instantanee', 'Priorite VIP automatique 120 min', 'Gestion HOLD et Reservations', 'APK Android TV dedie'].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-[#10b981]">✓</span><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-[#00e5ff]/10 to-[#7c3aed]/10 border border-[#00e5ff]/20 rounded-3xl px-8 py-8 max-w-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-black mb-3">Pret a digitaliser votre Gaming Room ?</h3>
              <p className="text-slate-400 text-sm mb-6">Rejoignez les Gaming Rooms qui font confiance a KASMOK Digital. Souscription en 2 minutes.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/souscrire-gaming-room" className="bg-[#00e5ff] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-[#00c4d9] transition-colors">
                  Souscrire maintenant
                </Link>
                <a href="#contact" className="border border-white/10 text-slate-300 px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-white/5 transition-colors">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* HOTEL MANAGEMENT SHOWCASE */}
      <section id="hotel" className="py-24 px-6 border-t border-white/5 overflow-hidden bg-[#0a0d14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] text-xs font-mono tracking-[3px] uppercase">KASMOK Hotel</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">
              Gerez votre hotel<br className="hidden md:block" />
              <span className="text-[#f59e0b]">avec precision</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Reservations, chambres, restaurant, nettoyage, facturation — tout integre dans une seule plateforme pensee pour les hotels de Kinshasa.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: '🏨', label: 'Gestion chambres', desc: 'Check-in/out en 1 clic' },
              { icon: '🍽️', label: 'Restaurant integre', desc: 'Commandes et facturation' },
              { icon: '🧹', label: 'Equipe nettoyage', desc: 'Taches et SLA 15min' },
              { icon: '💳', label: 'Facturation unifiee', desc: 'Chambre + restaurant' },
            ].map((f, i) => (
              <div key={i} className="bg-[#0f1320] border border-[#f59e0b]/20 rounded-2xl p-5 text-center hover:border-[#f59e0b]/40 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-bold text-sm mb-1">{f.label}</div>
                <div className="text-slate-500 text-xs">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <div className="bg-[#0f1320] border border-[#f59e0b]/20 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="text-[#f59e0b] text-xs font-mono tracking-[3px] uppercase">Vue Reception</span>
                  <h3 className="text-2xl font-black mt-2 mb-4">Tableau de bord hotel</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">La reception voit toutes les chambres en temps reel. Check-in rapide, gestion des files d attente, statut nettoyage — tout en un coup d oeil.</p>
                  <div className="space-y-3">
                    {['Check-in et check-out instantanes', 'Statut chambre en temps reel', 'File d attente et reservations', 'Historique client complet'].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-[#f59e0b]">✓</span><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-[#070b14] rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                      <span className="text-[#f59e0b] font-black tracking-widest text-xs uppercase">Hotel Dashboard</span>
                      <span className="text-slate-500 text-xs">Grand Hotel Kinshasa</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { room: 'Ch. 101', type: 'Double', status: 'OCCUPEE', guest: 'M. Kabila', color: '#10b981' },
                        { room: 'Ch. 102', type: 'Suite', status: 'LIBRE', guest: '—', color: '#475569' },
                        { room: 'Ch. 103', type: 'Simple', status: 'NETTOYAGE', guest: 'En cours', color: '#f59e0b' },
                        { room: 'Ch. 104', type: 'Double', status: 'RESERVEE', guest: 'M. Mukeba', color: '#a78bfa' },
                      ].map((r, i) => (
                        <div key={i} className="bg-[#0f1320] rounded-xl p-3 border" style={{ borderColor: r.color + '40' }}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-black text-white text-xs">{r.room}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: r.color + '20', color: r.color }}>{r.status}</span>
                          </div>
                          <div className="text-slate-400 text-xs mb-1">{r.type}</div>
                          <div className="text-slate-300 text-xs font-bold">{r.guest}</div>
                          {r.status === 'LIBRE' && <button className="mt-2 w-full text-xs bg-[#f59e0b] text-black font-black py-1 rounded-lg">CHECK-IN</button>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0f1320] border border-[#10b981]/20 rounded-3xl p-6">
                <span className="text-[#10b981] text-xs font-mono tracking-[3px] uppercase">Restaurant</span>
                <h3 className="text-xl font-black mt-2 mb-3">Gestion restaurant integre</h3>
                <p className="text-slate-400 text-sm mb-4">Commandes par table, facturation directe sur la chambre, suivi cuisine en temps reel.</p>
                <div className="bg-[#070b14] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Table 5 — Chambre 101</div>
                  <div className="space-y-2 mb-3">
                    {[
                      { item: 'Poulet braise', qty: 2, prix: '8 000 CDF' },
                      { item: 'Eau minerale', qty: 3, prix: '3 000 CDF' },
                      { item: 'Dessert du jour', qty: 2, prix: '4 000 CDF' },
                    ].map((o, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-slate-400">{o.qty}x {o.item}</span>
                        <span className="text-white font-bold">{o.prix}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-2 flex justify-between text-xs font-black">
                    <span className="text-slate-400">Total</span>
                    <span className="text-[#10b981]">15 000 CDF</span>
                  </div>
                  <div className="mt-3 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg py-2 text-center text-xs font-black text-[#10b981]">Facture sur chambre 101</div>
                </div>
              </div>
              <div className="bg-[#0f1320] border border-[#a78bfa]/20 rounded-3xl p-6">
                <span className="text-[#a78bfa] text-xs font-mono tracking-[3px] uppercase">Nettoyage</span>
                <h3 className="text-xl font-black mt-2 mb-3">Equipe nettoyage SLA 15min</h3>
                <p className="text-slate-400 text-sm mb-4">Apres chaque checkout, une tache de nettoyage est automatiquement creee. SLA garanti 15 minutes.</p>
                <div className="bg-[#070b14] rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Taches en cours</div>
                  <div className="space-y-2">
                    {[
                      { room: 'Ch. 102', agent: 'Marie K.', time: '8 min', status: 'EN COURS', color: '#f59e0b' },
                      { room: 'Ch. 205', agent: 'Paul M.', time: '2 min', status: 'TERMINE', color: '#10b981' },
                      { room: 'Ch. 301', agent: 'Non assigne', time: '—', status: 'EN ATTENTE', color: '#ef4444' },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 bg-[#0f1320] rounded-lg p-2 border border-white/5">
                        <div className="flex-1">
                          <div className="font-bold text-xs text-white">{t.room}</div>
                          <div className="text-slate-500 text-xs">{t.agent}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold" style={{ color: t.color }}>{t.status}</div>
                          <div className="text-slate-500 text-xs">{t.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-[#f59e0b]/10 to-[#10b981]/10 border border-[#f59e0b]/20 rounded-3xl px-8 py-8 max-w-2xl">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-black mb-3">KASMOK Hotel — Bientot disponible</h3>
              <p className="text-slate-400 text-sm mb-6">Notre module Hotel est en cours de developpement. Inscrivez-vous pour etre parmi les premiers a y acceder.</p>
              <a href="#contact" className="bg-[#f59e0b] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-[#d97706] transition-colors inline-block">
                Etre notifie au lancement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-[#00e5ff] mb-2">{stats.active_gaming_rooms}+</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest">Gaming Rooms actives</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#a78bfa] mb-2">{stats.total_tvs}+</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest">TVs</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[#10b981] mb-2">{stats.cities_covered}</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest">Ville{stats.cities_covered > 1 ? 's' : ''} couverte{stats.cities_covered > 1 ? 's' : ''}</div>
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
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button type="submit" disabled={sending} className="w-full bg-[#00e5ff] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-[#00c4d9] transition-colors disabled:opacity-50">
                {sending ? "Envoi..." : "Envoyer le message"}
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



