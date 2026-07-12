import { Link } from 'react-router-dom'

export default function ATMPage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d14]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-lg tracking-[3px] uppercase">KASMOK</span>
          </Link>
          <a href="#contact" className="text-xs bg-[#10b981] text-black font-black px-4 py-2 rounded-lg tracking-widest uppercase">
            Nous contacter
          </a>
        </div>
      </nav>

      <section className="relative pt-40 pb-20 px-6" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16,185,129,.10) 0%, transparent 60%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">🏧</div>
          <span className="text-[#10b981] text-xs font-mono tracking-[3px] uppercase">KASMOK Monetics</span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-6">Deploiement<br /><span className="text-[#10b981]">ATM</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Deploiement et maintenance de distributeurs automatiques de billets pour banques et institutions financieres, avec integration multi-reseaux (Visa, Mastercard, UnionPay).
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="bg-[#10b981] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm">
              Demander un devis
            </a>
            <Link to="/" className="border border-white/10 text-slate-300 px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-white/5">
              ← Retour
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#10b981] text-xs font-mono tracking-[3px] uppercase">Notre expertise</span>
            <h2 className="text-3xl font-black mt-3">Ce que nous offrons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚙️', title: 'Deploiement complet', color: '#10b981', items: ['Etude de site et installation', 'Configuration multi-reseaux', 'Certification Visa/Mastercard/UnionPay', 'Mise en service accompagnee'] },
              { icon: '🔧', title: 'Maintenance', color: '#00e5ff', items: ['Intervention rapide sur site', 'Maintenance preventive planifiee', 'Support technique dedie', 'Gestion des consommables (billets, rouleaux)'] },
              { icon: '📊', title: 'Supervision', color: '#a78bfa', items: ['Monitoring temps reel', 'Alertes de panne automatiques', 'Rapports de disponibilite', 'Suivi des transactions'] },
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

      <section id="contact" className="py-20 px-6 border-t border-white/5 bg-[#0a0d14]">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-4xl mb-4">🏧</div>
          <h2 className="text-2xl font-black mb-3">Discutons de votre projet ATM</h2>
          <p className="text-slate-400 text-sm mb-8">Contactez notre equipe pour une etude personnalisee de vos besoins.</p>
          <a href="mailto:contact@kasmokgroup.com?subject=Demande devis ATM" className="block w-full bg-[#10b981] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm text-center hover:opacity-90 transition-colors">
            Demander un devis
          </a>
          <p className="text-slate-500 text-xs mt-4">Ou ecrivez-nous a contact@kasmokgroup.com</p>
        </div>
      </section>

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
