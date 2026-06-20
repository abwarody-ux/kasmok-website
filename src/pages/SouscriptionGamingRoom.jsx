import { useState } from 'react'
import { Link } from 'react-router-dom'

const API = 'https://gaming-tv-backend-production.up.railway.app'

const CITIES = ['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Goma', 'Kisangani', 'Kananga', 'Bukavu', 'Matadi']

export default function SouscriptionGamingRoom() {
  const [form, setForm] = useState({ full_name: '', phone: '', email: '', city: 'Kinshasa', nb_tvs: 1 })
  const [status, setStatus] = useState('form')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (key, value) => setForm(p => ({ ...p, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.full_name || !form.phone || !form.email) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    setSending(true)
    setError('')
    try {
      const res = await fetch(`${API}/kasmok/subscriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-token': 'gaming-tv-test-2025' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch (e) {
      setError('Erreur lors de l\'envoi. Réessayez ou contactez-nous directement.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white">
      <nav className="border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
            <span className="font-black text-lg tracking-[3px] uppercase">KASMOK</span>
          </Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">← Retour à l'accueil</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono tracking-[3px] uppercase px-4 py-1.5 rounded mb-6">
            🎮 Gaming Room Management
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">Souscrivez votre Gaming Room</h1>
          <p className="text-slate-400">
            Lancez votre salle de jeux PS4/PS5 avec la plateforme KASMOK Digital — gestion complète, monitoring temps réel, et support dédié.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-[#0f1320] border border-green-500/30 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-green-400 mb-2">Demande envoyée avec succès !</h2>
            <p className="text-slate-400 mb-2">
              Votre demande de souscription a été reçue. Notre équipe va vous contacter prochainement pour la suite du processus.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              Vous recevrez bientôt un email avec le lien pour compléter votre formulaire KYC.
            </p>
            <Link to="/" className="inline-block bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#00e5ff]/20 transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#0f1320] border border-white/10 rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Nom complet *</label>
              <input required value={form.full_name} onChange={e => handleChange('full_name', e.target.value)}
                className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]" placeholder="Jean Mpiana" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Téléphone *</label>
                <input required value={form.phone} onChange={e => handleChange('phone', e.target.value)}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]" placeholder="+243..." />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Email *</label>
                <input required type="email" value={form.email} onChange={e => handleChange('email', e.target.value)}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]" placeholder="vous@email.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Ville</label>
                <select value={form.city} onChange={e => handleChange('city', e.target.value)}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]">
                  {CITIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">Nombre de TVs</label>
                <input type="number" min={1} max={20} value={form.nb_tvs} onChange={e => handleChange('nb_tvs', parseInt(e.target.value) || 1)}
                  className="w-full bg-[#151b2e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#00e5ff]" />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button type="submit" disabled={sending}
              className="w-full bg-[#00e5ff] text-black font-black py-3.5 rounded-xl tracking-widest uppercase text-sm hover:bg-[#00c4d9] transition-colors disabled:opacity-50">
              {sending ? 'Envoi...' : 'Soumettre ma demande'}
            </button>
            <p className="text-center text-slate-500 text-xs">
              Après soumission, notre équipe vous contactera pour la suite du processus (vérification KYC, configuration de votre Gaming Room).
            </p>
          </form>
        )}
      </div>

      <footer className="py-12 px-6 border-t border-white/5 text-center mt-12">
        <p className="text-slate-600 text-xs">© KASMOK Group 2026 · Kinshasa, RDC</p>
      </footer>
    </div>
  )
}
