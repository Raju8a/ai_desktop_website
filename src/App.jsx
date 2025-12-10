import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Very soft water / nature ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.10),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.08),_transparent_65%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-56 w-56 rounded-full bg-emerald-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-teal-400/8 blur-3xl" />

      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/85 ring-1 ring-teal-300/40">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-teal-100">
                Aishu
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium tracking-[0.16em] uppercase text-white/75">
                AI Desktop Worker
              </span>
              <span className="text-[11px] text-teal-100/70">
                Calm control over your computer
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-white/60">
            <a href="#product" className="hover:text-white transition-colors">
              Product
            </a>
            <a href="#how-it-installs" className="hover:text-white transition-colors">
              Install
            </a>
            <a href="#docs" className="hover:text-white transition-colors">
              Docs
            </a>
            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>

            <a
              href="#install"
              className="rounded-full border border-teal-300/60 bg-slate-950/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-teal-100 hover:bg-teal-500/10 transition-colors"
            >
              Download
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-12 md:pt-16">
        {/* HERO – the one you liked, just softer lights */}
        <section
          id="install"
          className="flex flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center md:gap-14"
        >
          {/* Left side */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-teal-200/80">
              Quiet · Local · Yours
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
              Turn your desktop into{" "}
              <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                a calm, obedient system.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-100/85">
              A gentle worker that moves through Chrome, Excel, PowerPoint,
              Notion, VS&nbsp;Code and your files. No ads, no noise — just clear
              commands and visible actions, like water flowing where you guide it.
            </p>

            {/* Command preview pill */}
            <div className="mt-6 inline-flex max-w-lg items-center gap-3 rounded-2xl border border-teal-200/20 bg-slate-900/80 px-4 py-3 text-xs text-slate-50/85">
              <span className="rounded-full bg-slate-800/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-200">
                Example
              </span>
              <span className="text-[11px]">
                “Clean this Excel, create 6 slides in PowerPoint, save to
                Reports.”
              </span>
            </div>

            {/* Buttons – same position, lighter glow */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/Raju8a/ai-desktop-worker-updates/releases/download/v1.0.5/AI-Desktop-Worker-Setup-1.0.5.exe"
                className="inline-flex items-center justify-center rounded-full bg-teal-300 px-6 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-slate-950 shadow-md hover:brightness-110 transition"
              >
                Download for Windows
              </a>

              <a
                href="#how-it-installs"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-slate-100/80 hover:bg-white/5 transition"
              >
                See how install works
              </a>
            </div>

            {/* Meta line */}
            <p className="mt-3 text-[11px] text-slate-200/65">
              v1.0.5 · Windows 10/11 · 64-bit · Last update: Dec 2025
            </p>
          </div>

          {/* Right side: install panel with softer light */}
          <div className="relative">
            {/* soft glow */}
            <div className="pointer-events-none absolute -inset-5 rounded-3xl bg-teal-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-slate-950/85 p-5 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  <span className="text-[11px] font-medium text-slate-100/80">
                    Installer ready
                  </span>
                </div>
                <span className="text-[10px] text-slate-400/70">
                  Local worker · No ads
                </span>
              </div>

              <h2 className="mt-4 text-sm font-semibold text-slate-50">
                AI Desktop Worker · Setup
              </h2>

              {/* OS selector */}
              <div className="mt-5 space-y-2 text-xs text-slate-100/85">
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-300/80">
                  Choose your system
                </p>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 rounded-xl border border-teal-200/40 bg-slate-900/80 px-3 py-2 text-[12px]">
                    <input
                      type="radio"
                      name="os"
                      defaultChecked
                      className="h-3 w-3 accent-teal-300"
                    />
                    <span>Windows 10 / 11 (64-bit)</span>
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2 text-[12px] text-slate-400/80">
                    <input type="radio" name="os" disabled />
                    <span>Other platforms · coming later</span>
                  </label>
                </div>
              </div>

              {/* Download button – softer */}
              <a
                href="https://github.com/Raju8a/ai-desktop-worker-updates/releases/download/v1.0.5/AI-Desktop-Worker-Setup-1.0.5.exe"
                className="mt-6 flex items-center justify-center rounded-2xl bg-teal-300/95 px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-slate-950 shadow-md hover:bg-teal-300 transition"
              >
                Download .exe (64-bit)
              </a>

              {/* Checksums */}
              <div className="mt-4 space-y-1 text-[10px] text-slate-300/75">
                <p>SHA-256: ••••••••••••••••••••••••••••••••</p>
                <p>Size: 120 MB · No ads · No bundled software</p>
              </div>

              {/* Mini log hint */}
              <div className="mt-5 rounded-2xl border border-teal-200/25 bg-slate-950/90 p-3">
                <p className="text-[10px] font-mono text-emerald-300/90">
                  [worker] online · watching your desktop
                </p>
                <p className="mt-1 text-[10px] font-mono text-teal-200/90">
                  [apps] chrome, excel, powerpoint, notion, vscode, files
                </p>
                <p className="mt-1 text-[10px] font-mono text-slate-300/75">
                  waiting for your first clear sentence…
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation steps */}
        <section
          id="how-it-installs"
          className="mt-24 border-t border-white/5 pt-10"
        >
          <h2 className="text-sm font-medium text-slate-50">
            Installation that feels natural.
          </h2>
          <p className="mt-2 max-w-md text-sm text-slate-200/75">
            You arrive here and the install is already visible. Three simple
            steps — no searching, no confusion.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <StepCard
              step="01"
              title="Download"
              body="Click the installer from the first screen. No extra pages, no email wall, no offers."
            />
            <StepCard
              step="02"
              title="Run once"
              body="We set up the worker, background services and updates. You choose what tools it can touch."
            />
            <StepCard
              step="03"
              title="Give it words"
              body="Describe what you need like you’d tell a person. The worker moves calmly through your apps."
            />
          </div>
        </section>

        {/* Product capabilities */}
        <section id="product" className="mt-24 border-t border-white/5 pt-10">
          <h2 className="text-sm font-medium text-slate-50">
            One worker, many places it can flow.
          </h2>
          <p className="mt-2 max-w-md text-sm text-slate-200/80">
            You stay in plain language; it travels through the tools and files
            for you.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Chrome"
              body="Open sites, sign in, download files and capture stable data."
            />
            <FeatureCard
              title="Excel"
              body="Clean up sheets, apply formulas, summarize tables and prepare data for reports."
            />
            <FeatureCard
              title="PowerPoint"
              body="Turn scattered inputs into structured decks with titles, insights and next steps."
            />
            <FeatureCard
              title="File system"
              body="Create folders, rename, move and tidy your directories like a quiet organizer."
            />
            <FeatureCard
              title="Notion"
              body="Send outcomes into pages, notes and boards so your work stays in one calm place."
            />
            <FeatureCard
              title="VS Code"
              body="Open projects, run scripts and remove repetitive dev steps."
            />
          </div>
        </section>

        {/* Safety / trust */}
        <section className="mt-24 border-t border-white/5 pt-10">
          <h2 className="text-sm font-medium text-slate-50">
            Boundaries that feel natural.
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <TrustCard body="Your files stay on your machine unless you explicitly connect external services." />
            <TrustCard body="You control the models, keys and limits. The worker only connects the dots." />
            <TrustCard body="Clear logs for every action. No hidden jobs, no tracking, no selling behaviour." />
          </div>
        </section>

        {/* Docs / Support */}
        <section
          id="docs"
          className="mt-24 border-t border-white/5 pt-10 text-sm text-slate-200/80"
        >
          <h2 className="text-sm font-medium text-slate-50">Docs</h2>
          <p className="mt-2 max-w-md">
            First-time setup, example commands and deeper flows will live here.
            For now, install, open, and try one simple sentence.
          </p>
        </section>

        <section
          id="support"
          className="mt-12 border-t border-white/5 pt-10 text-sm text-slate-200/80"
        >
          <h2 className="text-sm font-medium text-slate-50">Support</h2>
          <p className="mt-2 max-w-md">
            If something feels off, write to{" "}
            <span className="text-teal-200">support@yourdomain.com</span>. No
            ticket maze, just a clear reply.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/95 py-5 text-[11px] text-slate-400">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-3 md:justify-between">
          <span>© 2025 Aisu. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/terms.html" className="hover:text-slate-100 transition">
              Terms
            </a>
            <a href="/privacy.html" className="hover:text-slate-100 transition">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ step, title, body }) {
  return (
    <div className="rounded-2xl border border-teal-200/25 bg-slate-950/90 p-4 shadow-lg">
      <div className="text-[11px] font-medium text-teal-100/80">{step}</div>
      <div className="mt-1 text-sm font-semibold text-slate-50">{title}</div>
      <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{body}</p>
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="rounded-xl bg-slate-950/80 border border-white/10 p-4">
      <div className="text-xs font-medium text-slate-50">{title}</div>
      <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{body}</p>
    </div>
  );
}

function TrustCard({ body }) {
  return (
    <div className="rounded-2xl border border-emerald-300/30 bg-slate-950/90 p-4 shadow-md">
      <p className="text-xs leading-relaxed text-slate-200/85">{body}</p>
    </div>
  );
}

export default App;
