import Link from 'next/link';
import { Tab, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Step, Steps } from '@/components/steps';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8 px-4 md:px-8 max-w-5xl mx-auto text-fd-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 pt-10">
        <div className="relative max-w-full">
          {/* Background Glow using Primary color */}
          <div className="absolute inset-0 bg-fd-primary/10 blur-3xl rounded-full" />
          <img
            src="https://github.com/1Lucas1apk/lab/blob/master/mwc2h6q%20-%20Imgur.png?raw=true"
            alt="NodeLink Banner"
            className="relative w-full h-auto rounded-xl shadow-lg border border-fd-border bg-fd-card"
          />
        </div>

        <div className="space-y-4 max-w-2xl px-2">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-b from-fd-primary to-fd-primary/60">
            NodeLink
          </h1>
          <p className="text-lg md:text-xl text-fd-foreground font-medium">
            A modern Lavalink alternative built entirely in Node.js.
          </p>
          <p className="text-sm md:text-base text-fd-muted-foreground">
            Lightweight, modular, and optimized for real-time performance. <br className="hidden md:inline" />
            It doesn’t try to reinvent the wheel — it just makes it spin with less weight. 🌿
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="bg-fd-primary text-fd-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-fd-primary/90 transition-colors shadow-sm"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/PerformanC/NodeLink"
            target="_blank"
            rel="noreferrer"
            className="border border-fd-border bg-fd-background px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section>
        <div className="mb-8 text-center px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fd-foreground">Why NodeLink?</h2>
          <p className="text-sm md:text-base text-fd-muted-foreground mt-2">
            Built for modern infrastructure, designed for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Feature 1: The Core (Large) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-fd-border bg-linear-to-br from-fd-card to-fd-background p-6 md:p-8 transition-all hover:shadow-lg hover:border-fd-primary/20 group">
            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-6xl md:text-9xl select-none pointer-events-none group-hover:opacity-20 transition-opacity">
              JS
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full gap-4">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20 text-2xl">
                📦
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">100% Node.js</h3>
                <p className="text-sm md:text-base text-fd-muted-foreground max-w-md">
                  No external runtimes. No Java installation required. NodeLink compiles
                  natively and runs anywhere Node.js runs, making deployment simpler than ever.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Audio Filters (Visual) */}
          <div className="md:col-span-1 rounded-2xl border border-fd-border bg-fd-card p-6 flex flex-col justify-between hover:border-fd-primary/50 transition-colors group gap-4">
            <div className="flex gap-1 h-12 md:h-16 items-end opacity-70 group-hover:opacity-100 transition-opacity">
              {[40, 70, 30, 85, 50, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-fd-primary rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Real-time Filters</h3>
              <p className="text-sm text-fd-muted-foreground">
                Built-in EQ, Timescale, Tremolo, and Compressor with zero latency.
              </p>
            </div>
          </div>

          {/* Feature 3: WASM (Technical) */}
          <div className="md:col-span-1 rounded-2xl border border-fd-border bg-fd-card p-6 hover:bg-fd-accent/10 transition-colors">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20 text-xl">
              ⚡
            </div>
            <h3 className="text-lg font-bold mb-1">WASM Decoding</h3>
            <p className="text-sm text-fd-muted-foreground">
              Powered by WebAssembly and native modules for precise, bit-perfect audio processing.
            </p>
          </div>

          {/* Feature 4: Sources (List) */}
          <div className="md:col-span-1 rounded-2xl border border-fd-border bg-fd-card p-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5 rotate-12 text-6xl">🌐</div>
            <h3 className="text-lg font-bold mb-3">Multi-Source Support</h3>
            <div className="flex flex-wrap gap-2">
              {['YouTube', 'Spotify', 'SoundCloud', 'Deezer', 'Twitch', 'Apple Music'].map((src) => (
                <span key={src} className="px-2 py-1 text-xs font-medium rounded-md bg-fd-secondary text-fd-secondary-foreground border border-fd-border">
                  {src}
                </span>
              ))}
              <span className="px-2 py-1 text-xs font-medium text-fd-muted-foreground">+ more</span>
            </div>
          </div>

          {/* Feature 5: Clustering (Wide) */}
          <div className="md:col-span-1 rounded-2xl border border-fd-border bg-linear-to-b from-fd-card to-fd-accent/5 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <h3 className="text-lg font-bold mb-1">Smart Clustering</h3>
            <p className="text-sm text-fd-muted-foreground">
              Worker-based model scales automatically across CPU cores.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start - Grid Fix Applied */}
      <section className="bg-fd-card text-fd-card-foreground border border-fd-border rounded-xl p-6 md:p-8 max-w-full overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <p className="text-fd-muted-foreground mb-4">
          Get up and running in seconds. NodeLink requires Node.js v22 or higher.
        </p>

        <Steps>
          <Step>
            <h3 className="font-semibold text-fd-foreground mb-2">Clone the repository</h3>
            {/* The "grid grid-cols-1" wrapper forces children to respect the container width */}
            <div className="w-full grid grid-cols-1">
              <DynamicCodeBlock
                lang='shell'
                code={`git clone https://github.com/PerformanC/NodeLink.git`}
              />
            </div>
          </Step>
          <Step>
            <h3 className="font-semibold text-fd-foreground mb-2">Enter directory</h3>
            <div className="w-full grid grid-cols-1">
              <DynamicCodeBlock
                lang='shell'
                code={`cd NodeLink`}
              />
            </div>
          </Step>
          <Step>
            <h3 className="font-semibold text-fd-foreground mb-2">Install & Run</h3>
            {/* Grid fix applied to Tabs as well */}
            <Tabs defaultValue="npm" className="w-full grid grid-cols-1">
              <TabsList className="flex flex-wrap h-auto justify-start gap-1 mb-2">
                <TabsTrigger value="npm">npm</TabsTrigger>
                <TabsTrigger value="yarn">yarn</TabsTrigger>
                <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                <TabsTrigger value="bun">bun</TabsTrigger>
                <TabsTrigger value="docker" disabled>docker (Soon)</TabsTrigger>
              </TabsList>

              <TabsContent value="npm" className="w-full min-w-0">
                <DynamicCodeBlock
                  lang="bash"
                  code={`# Copy config & start
cp config.default.js config.js
npm run start`}
                />
              </TabsContent>
              <TabsContent value="yarn" className="w-full min-w-0">
                <DynamicCodeBlock
                  lang="bash"
                  code={`# Copy config & start
cp config.default.js config.js
yarn start`}
                />
              </TabsContent>
              <TabsContent value="pnpm" className="w-full min-w-0">
                <DynamicCodeBlock
                  lang="bash"
                  code={`# Copy config & start
cp config.default.js config.js
pnpm start`}
                />
              </TabsContent>
              <TabsContent value="bun" className="w-full min-w-0">
                <DynamicCodeBlock
                  lang="bash"
                  code={`# Copy config & start
cp config.default.js config.js
bun start`}
                />
              </TabsContent>
            </Tabs>
          </Step>
        </Steps>
      </section>

      {/* Performance Stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-fd-foreground">Memory Efficiency</h2>
          <p className="text-fd-muted-foreground mb-4 leading-relaxed">
            NodeLink is designed to respect your resources. It uses a worker-based architecture where
            each process manages its own players and buffers.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-fd-primary/10 text-fd-primary font-bold text-xs border border-fd-primary/20">
                ~50
              </span>
              <span className="text-sm font-medium text-fd-foreground">MB at Startup</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-bold text-xs border border-fd-border">
                ~24
              </span>
              <span className="text-sm font-medium text-fd-foreground">MB when Idle</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs border border-fd-border">
                +4
              </span>
              <span className="text-sm font-medium text-fd-foreground">MB per Active Player (avg)</span>
            </li>
          </ul>
        </div>
        <div className="bg-fd-card text-fd-card-foreground p-6 rounded-xl border border-fd-border shadow-sm">
          <h3 className="font-semibold mb-2">Architecture</h3>
          <p className="text-sm text-fd-muted-foreground">
            Workers act as autonomous mini-instances. This reduces bottlenecks and keeps stability
            even under heavy load. The modular structure allows swapping components without
            touching the core server.
          </p>
        </div>
      </section>

      {/* Footer / Community */}
      <section className="text-center py-8 border-t border-fd-border">
        <p className="text-lg font-medium mb-4 text-fd-foreground">Join the Community</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://discord.gg/uPveNfTuCJ"
            className="text-fd-muted-foreground hover:text-fd-primary transition-colors"
          >
            PerformanC Discord
          </a>
          <span className="hidden md:inline text-fd-muted-foreground/50">•</span>
          <a
            href="https://discord.gg/fzjksWS65v"
            className="text-fd-muted-foreground hover:text-fd-primary transition-colors"
          >
            Ecliptia Discord Server
          </a>
        </div>
        <div className="text-sm text-fd-muted-foreground space-y-2">
          <p>
            Made with ⚡ and curiosity by PerformanC and Ecliptia 💙
            <span className="ml-2 inline-block px-2 py-0.5 rounded text-[10px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 font-bold tracking-wider">
              BRAZIL 🇧🇷
            </span>
          </p>
          <p>Released under the BSD 2-Clause License.</p>
        </div>
      </section>
    </div>
  );
}
