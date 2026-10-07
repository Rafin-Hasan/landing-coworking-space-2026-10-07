export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Basecamp Collective</span>
        <a href="#cta" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition">
          Take a Tour
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-rose-600 font-semibold mb-4">Coworking Space</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">A workspace that actually gets you working</h1>
        <p className="text-lg text-slate-600 mb-10">Fast wifi, quiet rooms, and a community of founders and freelancers down the hall.</p>
        <a href="#cta" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-rose-700 transition">
          Book a Free Day Pass
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Private Phone Booths</h3>
          <p className="text-slate-600">Quiet corners for calls and focus work.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">24/7 Access</h3>
          <p className="text-slate-600">Members can work whenever inspiration strikes.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Community Events</h3>
          <p className="text-slate-600">Monthly mixers and workshops with local founders.</p>
        </div>
      </section>

      <section id="cta" className="bg-rose-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Come see the space for yourself</h2>
        <p className="mb-8 text-rose-100">First day pass is on us.</p>
        <a href="#" className="inline-block bg-white text-rose-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Book a Free Day Pass
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Basecamp Collective. All rights reserved.
      </footer>
    </div>
  )
}
