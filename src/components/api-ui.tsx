'use client';

import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

export function ApiSchema({ name, type, required, description }: { name: string, type: string, required?: boolean, description: ReactNode }) {
    return (
        <div className="flex flex-col p-3 rounded-lg bg-fd-secondary/20 border border-fd-border/50 mb-2 transition-colors hover:bg-fd-secondary/40">
            <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-sm font-bold text-fd-foreground">{name}</span>
                <span className="text-[11px] text-fd-muted-foreground font-mono bg-fd-background/50 px-2 py-0.5 rounded border border-fd-border/50 leading-none">{type}</span>
                {required && <span className="text-[10px] text-red-600 dark:text-red-400 border border-red-500/20 bg-red-500/10 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider leading-none">Required</span>}
            </div>
            <div className="text-xs text-fd-muted-foreground/90 leading-relaxed">{description}</div>
        </div>
    )
}

export function ApiSection({ children, title }: { children: ReactNode, title: string }) {
    return (
        <div className="mt-4 first:mt-0">
            <h4 className="text-xs font-bold text-fd-muted-foreground mb-2 uppercase tracking-widest select-none">{title}</h4>
            {children}
        </div>
    )
}

export function ApiCard({ children, className, name, method, url, description, example }: { children: ReactNode, className?: string, name: string, method?: string, url?: string, description?: ReactNode, example?: ReactNode }) {
    const id = name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return (
        <div className={cn(
            "group relative rounded-xl border border-fd-border/50 bg-fd-card/30 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-fd-accent/50 hover:shadow-sm hover:shadow-fd-accent/5 my-8",
            className
        )}>
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-white/5 dark:to-transparent pointer-events-none" />
            
            <div className="p-4 border-b border-fd-border/50 bg-fd-card/20">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <h3 id={id} className="scroll-m-20 text-lg font-bold tracking-tight text-fd-foreground relative flex items-center gap-2 m-0 p-0 leading-none translate-y-[-10px]">
                            <a href={`#${id}`} className="not-prose focus:outline-none hover:text-fd-primary transition-colors truncate">
                                {name}
                            </a>
                        </h3>
                        {url && <div className="font-mono text-xs text-fd-primary bg-fd-primary/10 px-2.5 py-1 rounded-md border border-fd-primary/20 select-all whitespace-nowrap leading-none flex items-center min-h-[24px]">{url}</div>}
                    </div>
                    
                    {method && (
                        <span className={cn(
                            "px-2.5 py-1 rounded-md text-xs font-bold border shadow-sm tracking-wider uppercase whitespace-nowrap shrink-0 select-none flex items-center min-h-[24px] leading-none",
                            method === "GET" && "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                            method === "POST" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                            method === "DELETE" && "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                            method === "PATCH" && "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                            method === "WS" && "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
                            method === "EVENT" && "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
                        )}>{method}</span>
                    )}
                </div>
                
                {description && <div className="text-fd-muted-foreground text-sm leading-relaxed mt-2">{description}</div>}
            </div>

            <div className="p-4 pt-2">
                {children}
                {example && (
                    <ApiSection title="Example">
                        {example}
                    </ApiSection>
                )}
            </div>
        </div>
    );
}