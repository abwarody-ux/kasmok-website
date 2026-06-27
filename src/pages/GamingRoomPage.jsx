import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const API = 'https://api.kasmokgroup.com'

export default function GamingRoomPage() {
  const [stats, setStats] = useState({ active_gaming_rooms: 0, total_tvs: 0, cities_covered: 0 })
  useEffect(() => {
    fetch(API + '/kasmok/gaming-rooms/public-stats').then(r => r.json()).then(setStats).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d14]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-lg tracking-[3px] uppercase">KASMOK</span>
          </Link>
          <Link to="/souscrire-gaming-room" className="text-xs bg-[#00e5ff] text-black font-black px-4 py-2 rounded-lg tracking-widest uppercase">
            Souscrire
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,229,255,.12) 0%, transparent 60%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">🎮</div>
          <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">KASMOK Digital</span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-6">Gaming Room<br /><span className="text-[#00e5ff]">Management</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            La plateforme SaaS complète pour gérer votre salle de jeux PS4/PS5 à Kinshasa et partout en RDC. Sessions, comptabilité, rapports, monitoring — tout en un.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/souscrire-gaming-room" className="bg-[#00e5ff] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm">
              🎮 Souscrire maintenant
            </Link>
            <Link to="/" className="border border-white/10 text-slate-300 px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-white/5">
              ← Retour
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div><div className="text-5xl font-black text-[#00e5ff] mb-2">{stats.active_gaming_rooms}+</div><div className="text-slate-500 text-xs uppercase tracking-widest">Gaming Rooms actives</div></div>
          <div><div className="text-5xl font-black text-[#a78bfa] mb-2">{stats.total_tvs}+</div><div className="text-slate-500 text-xs uppercase tracking-widest">TVs déployées</div></div>
          <div><div className="text-5xl font-black text-[#10b981] mb-2">{stats.cities_covered}</div><div className="text-slate-500 text-xs uppercase tracking-widest">Ville(s) couverte(s)</div></div>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Fonctionnalités</span>
            <h2 className="text-3xl font-black mt-3">Tout ce dont vous avez besoin</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '▶️', title: 'Sessions PS4/PS5', color: '#00e5ff', items: ['Timer précis par TV', 'Démarrage sur validation Manager', 'Pause/reprise (HOLD)', 'Bonus minutes +1/+2/+5 min', 'File VIP automatique ≥120 min'] },
              { icon: '💰', title: 'Comptabilité complète', color: '#10b981', items: ['Double entrée automatique', 'Fonds d’ouverture par caissier', 'Clôture caisse avec écart', 'EOD en 1 clic', 'Rapport email automatique'] },
              { icon: '📊', title: 'Rapports & Monitoring', color: '#a78bfa', items: ['Dashboard temps réel', 'Export Excel/PDF', 'Rapport mensuel Owner', 'File d’attente TV dédiée', 'Backup automatique 22h'] },
              { icon: '👥', title: '5 rôles opérationnels', color: '#f59e0b', items: ['KASMOK Admin (super admin)', 'Manager (sessions)', 'Caissier (ventes)', 'Financier (comptabilité)', 'Contrôleur (supervision)'] },
              { icon: '📱', title: 'APK Android TV', color: '#f97316', items: ['Application TV dédiée', 'Mode Kiosk sécurisé', 'QR Code d’activation', 'Monitoring file d’attente', 'Boot automatique'] },
              { icon: '🔒', title: 'Sécurité enterprise', color: '#ef4444', items: ['JWT 30min + refresh token', 'Audit log complet', 'Rate limiting par IP', 'Backups Supabase', 'CORS strict'] },
            ].map((f, i) => (
              <div key={i} className="bg-[#0f1320] border border-white/10 rounded-2xl p-6 hover:border-opacity-50 transition-colors" style={{ borderColor: f.color + '30' }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-black text-base mb-4" style={{ color: f.color }}>{f.title}</h3>
                <ul className="space-y-2">
                  {f.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                      <span style={{ color: f.color }} className="mt-0.5 flex-shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#0a0d14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Processus</span>
            <h2 className="text-3xl font-black mt-3">Démarrer en 3 étapes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Souscription', desc: 'Remplissez le formulaire en ligne avec vos informations. Gratuit et rapide.', color: '#00e5ff' },
              { n: '02', title: 'KYC & Validation', desc: 'Notre équipe vérifie vos documents et crée votre Gaming Room en 24h.', color: '#a78bfa' },
              { n: '03', title: 'Go Live !', desc: 'Vos agents reçoivent leurs accès par email. Vous êtes opérationnel immédiatement.', color: '#10b981' },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black mb-2" style={{ color: s.color + '20' }}>{s.n}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase">Tarification</span>
          <h2 className="text-3xl font-black mt-3 mb-4">Simple et transparent</h2>
          <p className="text-slate-400 mb-12">Contactez-nous pour obtenir une offre personnalisée selon le nombre de TVs et vos besoins.</p>
          <div className="bg-[#0f1320] border border-[#00e5ff]/20 rounded-3xl p-8 max-w-lg mx-auto">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-black mb-2">Pack Gaming Room</h3>
            <p className="text-slate-400 text-sm mb-6">Tout inclus — plateforme, APK, support, mises à jour</p>
            <ul className="space-y-3 mb-8 text-left">
              {['Accès illimité à la plateforme', 'APK Android TV inclus', 'Support technique dédié', 'Mises à jour automatiques', 'Formation des agents incluse'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-[#00e5ff]">✓</span>{item}
                </li>
              ))}
            </ul>
            <Link to="/souscrire-gaming-room" className="block w-full bg-[#00e5ff] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm text-center hover:bg-[#00c4d9] transition-colors">
              Obtenir mon offre →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <Link to="/" className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#00e5ff]"></div>
          <span className="font-black text-sm tracking-[3px] uppercase">KASMOK</span>
        </Link>
        <p className="text-slate-600 text-xs">© KASMOK Group 2026 · Kinshasa, RDC</p>
      </footer>
    </div>
  )
}
