export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Analyze how API changes<br />
          <span className="text-[#58a6ff]">affect your codebase</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Scans your code for API usage, compares against changelog updates, and flags breaking changes before they hit production. Stop discovering regressions at 2am.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect your first repo.</p>
      </section>

      {/* Features strip */}
      <section className="border-t border-b border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-[#58a6ff] text-3xl mb-2">&#x1F50D;</div>
            <h3 className="font-semibold text-white mb-1">AST-Powered Scanning</h3>
            <p className="text-sm text-[#8b949e]">Deep code analysis detects every API call site across your entire repository.</p>
          </div>
          <div>
            <div className="text-[#58a6ff] text-3xl mb-2">&#x1F4E1;</div>
            <h3 className="font-semibold text-white mb-1">Webhook & Polling</h3>
            <p className="text-sm text-[#8b949e]">Monitor changelogs in real-time via webhooks or scheduled polling — your choice.</p>
          </div>
          <div>
            <div className="text-[#58a6ff] text-3xl mb-2">&#x26A0;&#xFE0F;</div>
            <h3 className="font-semibold text-white mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified the moment a breaking change is detected, with exact file and line references.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$16<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repositories",
              "AST-based API usage scanning",
              "Webhook + polling changelog monitoring",
              "Breaking change detection & alerts",
              "Slack & email notifications",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which languages and frameworks are supported?</h3>
            <p className="text-[#8b949e] text-sm">Currently JavaScript, TypeScript, Python, and Go. The AST parser identifies API call patterns regardless of the framework you use.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does changelog monitoring work?</h3>
            <p className="text-[#8b949e] text-sm">You configure the API endpoints or changelog URLs to watch. We poll them on a schedule or accept webhook pushes, then diff the changes against your scanned usage.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my source code stored on your servers?</h3>
            <p className="text-[#8b949e] text-sm">No. We only store the extracted API usage metadata (function names, endpoints, line references) — never your raw source code.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} API Changelog Impact Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
