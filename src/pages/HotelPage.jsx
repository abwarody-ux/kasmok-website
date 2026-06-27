import { Link } from 'react-router-dom'

export default function HotelPage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d14]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-lg tracking-[3px] uppercase">KASMOK</span>
          </Link>
          <a href="#contact" className="text-xs bg-[#f59e0b] text-black font-black px-4 py-2 rounded-lg tracking-widest uppercase">
            Être notifié
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,.10) 0%, transparent 60%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">🏨</div>
          <span className="text-[#f59e0b] text-xs font-mono tracking-[3px] uppercase">KASMOK Hotel — Bientôt</span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-6">Hotel<br /><span className="text-[#f59e0b]">Management</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            La solution complète pour gérer votre hôtel en RDC. Chambres, restaurant, nettoyage, facturation — tout intégré dans une seule plateforme.
          </p>
          <div className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-sm font-bold px-6 py-3 rounded-xl mb-8">
            🚀 En cours de développement — Lancement prévu T3 2026
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#notify" className="bg-[#f59e0b] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm">
              Être notifié au lancement
            </a>
            <Link to="/" className="border border-white/10 text-slate-300 px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-white/5">
              ← Retour
            </Link>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] text-xs font-mono tracking-[3px] uppercase">Ce qui arrive</span>
            <h2 className="text-3xl font-black mt-3">Fonctionnalités prévues</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🛏️', title: 'Gestion des chambres', color: '#f59e0b', items: ['Check-in/out en 1 clic', 'Statut temps réel par chambre', 'File d’attente et réservations', 'Historique client complet', 'Tarification flexible'] },
              { icon: '🍽️', title: 'Restaurant intégré', color: '#10b981', items: ['Commandes par table', 'Facturation sur chambre', 'Suivi cuisine temps réel', 'Menu configurable', 'Rapport ventes journalier'] },
              { icon: '🧹', title: 'Équipe nettoyage', color: '#a78bfa', items: ['Tâches auto après checkout', 'SLA garanti 15 minutes', 'Assignation par agent', 'Suivi en temps réel', 'Alertes dépassement SLA'] },
              { icon: '💳', title: 'Facturation unifiée', color: '#00e5ff', items: ['Chambre + restaurant + extras', 'Paiement CDF/USD/Mobile', 'Facture imprimable', 'Export comptable', 'Rapport EOD automatique'] },
              { icon: '📊', title: 'Rapports & Analytics', color: '#f97316', items: ['Taux d’occupation', 'Revenu par chambre', 'Performance restaurant', 'Dashboard propriétaire', 'Export Excel/PDF'] },
              { icon: '👥', title: 'Rôles opérationnels', color: '#ef4444', items: ['Réceptionniste', 'Room Manager', 'Resto Manager', 'Agent nettoyage', 'Financier & Owner'] },
            ].map((f, i) => (
              <div key={i} className="bg-[#0f1320] border border-white/10 rounded-2xl p-6" style={{ borderColor: f.color + '30' }}>
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

      {/* NOTIFY */}
      <section id="notify" className="py-20 px-6 border-t border-white/5 bg-[#0a0d14]">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-2xl font-black mb-3">Soyez parmi les premiers</h2>
          <p className="text-slate-400 text-sm mb-8">Inscrivez-vous pour être notifié dès le lancement de KASMOK Hotel et bénéficier d’une offre de lancement exclusive.</p>
          <a href="mailto:contact@kasmokgroup.com?subject=Notification KASMOK Hotel" className="block w-full bg-[#f59e0b] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm text-center hover:bg-[#d97706] transition-colors">
            📧 M’inscrire pour le lancement
          </a>
          <p className="text-slate-500 text-xs mt-4">Ou écrivez-nous à contact@kasmokgroup.com</p>
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
