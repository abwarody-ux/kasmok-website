import { Link } from 'react-router-dom'

export default function ChurchPage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0d14]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-lg tracking-[3px] uppercase">KASMOK</span>
          </Link>
          <a href="#souscrire" className="text-xs bg-[#a78bfa] text-black font-black px-4 py-2 rounded-lg tracking-widest uppercase">
            Souscrire
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(167,139,250,.10) 0%, transparent 60%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">⛪</div>
          <span className="text-[#a78bfa] text-xs font-mono tracking-[3px] uppercase">KASMOK Church — Disponible</span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-6">Church<br /><span className="text-[#a78bfa]">Management</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            La plateforme complete pour digitaliser la gestion de votre eglise. Membres, departements, presences, offrandes et evenements — tout en un seul endroit.
          </p>
          <div className="inline-block bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#a78bfa] text-sm font-bold px-6 py-3 rounded-xl mb-8">
            ✅ Disponible et operationnel des maintenant
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://church.kasmokgroup.com" target="_blank" rel="noopener noreferrer" className="bg-[#a78bfa] text-black font-black px-8 py-3.5 rounded-xl tracking-widest uppercase text-sm">
              Acceder a KASMOK Church
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
            <span className="text-[#a78bfa] text-xs font-mono tracking-[3px] uppercase">Comment ca marche</span>
            <h2 className="text-3xl font-black mt-3">Fonctionnalites disponibles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '👤', title: 'Agents et roles', color: '#a78bfa', items: ['Pasteur, Secretaire, Financier', 'Tresorier, Chef de departement', 'Comptes crees par KASMOK Admin', 'Acces securise par role', 'Email de bienvenue automatique'] },
              { icon: '📇', title: 'Membres', color: '#00e5ff', items: ['Fiche complete par membre', 'Statut actif/inactif/visiteur', 'Suivi du bapteme', "Date d'adhesion", 'Coordonnees et adresse'] },
              { icon: '🗂️', title: 'Departements', color: '#10b981', items: ['Creation illimitee', 'Responsable par departement', 'Assignation de membres', "Vue d'ensemble des effectifs", 'Organisation flexible'] },
              { icon: '📋', title: 'Presences', color: '#f59e0b', items: ['Enregistrement par culte', 'Type de culte personnalisable', 'Total de presents', 'Notes libres', 'Historique complet'] },
              { icon: '💰', title: 'Offrandes', color: '#f97316', items: ['Dime, offrande, speciale', 'Montants CDF et USD', 'Totaux automatiques', 'Collecteur identifie', "Cle d'idempotence anti-doublon"] },
              { icon: '📅', title: 'Evenements', color: '#ef4444', items: ['Conferences, retraites, etc.', 'Lieu et description', 'Date et type personnalisables', 'Vue chronologique', 'Gestion centralisee'] },
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

      {/* SOUSCRIRE */}
      <section id="souscrire" className="py-20 px-6 border-t border-white/5 bg-[#0a0d14]">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-4xl mb-4">⛪</div>
          <h2 className="text-2xl font-black mb-3">Devenez client KASMOK Church</h2>
          <p className="text-slate-400 text-sm mb-8">Contactez-nous pour souscrire et digitaliser la gestion de votre eglise des aujourd'hui.</p>
          <a href="mailto:contact@kasmokgroup.com?subject=Souscription KASMOK Church" className="block w-full bg-[#a78bfa] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm text-center hover:bg-[#8b6ee8] transition-colors">
            Demander une souscription
          </a>
          <p className="text-slate-500 text-xs mt-4">Ou visitez la page d'accueil pour remplir le formulaire de souscription</p>
        </div>
      </section>

      {/* SHARE BAR */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <div className="text-xs text-slate-500 text-center mb-1 uppercase tracking-widest">Partager</div>
        <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1877F2] text-white font-black px-4 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-opacity text-xs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Facebook
        </a>
        <a href={"https://wa.me/?text=" + encodeURIComponent("KASMOK Church — Digitalisez la gestion de votre eglise " + (typeof window !== 'undefined' ? window.location.href : ''))}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white font-black px-4 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-opacity text-xs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent("KASMOK Church — Digitalisez la gestion de votre eglise") + "&url=" + encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white font-black px-4 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-opacity text-xs">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X / Twitter
        </a>
      </div>
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
