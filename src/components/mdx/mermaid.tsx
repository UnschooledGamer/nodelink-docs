'use client';
import { use, useEffect, useId, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/cn';

export function Mermaid({ chart }: { chart: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="animate-pulse h-72 bg-fd-muted rounded-xl" />;
  return <MermaidContent chart={chart} />;
}

const cache = new Map<string, Promise<any>>();

function cachePromise<T>(key: string, setPromise: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  if (cached) return cached as Promise<T>;
  const promise = setPromise();
  cache.set(key, promise);
  return promise;
}

function MermaidContent({ chart }: { chart: string }) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { default: mermaid } = use(cachePromise('mermaid', () => import('mermaid')));

  const { svg, bindFunctions } = use(
    cachePromise(`${chart}-${resolvedTheme}`, async () => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        themeVariables: {
          background: 'transparent',
          primaryColor: '#3b82f6',
          primaryTextColor: '#f8fafc',
          primaryBorderColor: '#1e293b',
          lineColor: '#94a3b8',
          secondaryColor: '#1e293b',
          tertiaryColor: '#0f172a',
          mainBkg: '#1e293b',
          nodeBorder: '#334155',
          clusterBkg: 'rgba(15, 23, 42, 0.5)',
          clusterBorder: '#1e293b',
          defaultLinkColor: '#64748b',
          titleColor: '#f8fafc',
          edgeLabelBackground: '#0f172a',
          nodeTextColor: '#f8fafc'
        }
      });
      const cleanChart = chart.trim().replaceAll('\n', '\n');
      return mermaid.render(id.replace(/:/g, ''), cleanChart);
    }),
  );

  return (
    <div className="my-12 rounded-xl border border-fd-border bg-[#0b0f1a] shadow-2xl overflow-hidden">
      <div className="flex items-center border-b border-fd-border/50 bg-fd-muted/30 p-3 px-4">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-500/40 border border-red-500/20" />
          <div className="size-2.5 rounded-full bg-amber-500/40 border border-amber-500/20" />
          <div className="size-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-fd-muted-foreground/80 ml-4">
          System Architecture Spec
        </span>
      </div>
      
      <div
        className="overflow-x-auto overflow-y-hidden bg-fd-background/5 scrollbar-thin scrollbar-thumb-fd-border scrollbar-track-transparent p-4 md:p-12"
        ref={containerRef}
      >
        <div
          ref={(container) => {
            if (container) bindFunctions?.(container);
          }}
          className={cn(
            "mermaid-chart mx-auto flex min-w-full justify-center",
            "[&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full",
            "[&_.label]:!fill-slate-200 [&_text]:!fill-slate-200 [&_tspan]:!fill-slate-200",
            "[&_.node_rect]:!fill-[#1e293b] [&_.node_polygon]:!fill-[#1e293b]",
            "[&_.cluster_rect]:!fill-slate-900/50 [&_.cluster_rect]:!stroke-slate-700",
            "[&_.edgePath_path]:!stroke-slate-500/50",
            "[&_.marker]:!fill-slate-500/50"
          )}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
}
