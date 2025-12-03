import React from 'react';
import { cn } from '@/lib/cn';

interface Field {
  name: string;
  value: string;
  inline?: boolean;
}

interface TroubleshootingCardProps {
  title: string;
  fields?: Field[];
  children: React.ReactNode;
  type?: 'info' | 'error' | 'warn' | 'success';
}

export function TroubleshootingCard({ title, fields, children, type = 'info' }: TroubleshootingCardProps) {
  const variants = {
    info: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/5',
      title: 'text-blue-600 dark:text-blue-400',
      glow: 'shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]'
    },
    error: {
      border: 'border-red-500/30',
      bg: 'bg-red-500/5',
      title: 'text-red-600 dark:text-red-400',
      glow: 'shadow-[0_0_30px_-10px_rgba(239,68,68,0.2)]'
    },
    warn: {
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/5',
      title: 'text-yellow-600 dark:text-yellow-400',
      glow: 'shadow-[0_0_30px_-10px_rgba(234,179,8,0.2)]'
    },
    success: {
      border: 'border-green-500/30',
      bg: 'bg-green-500/5',
      title: 'text-green-600 dark:text-green-400',
      glow: 'shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)]'
    },
  }[type];

  return (
    <div className={cn(
      "my-8 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.01]",
      variants.border,
      variants.bg,
      variants.glow
    )}>
      <div className="p-6">
        <h3 className={cn("text-xl font-bold mb-6 flex items-center gap-3 tracking-tight", variants.title)}>
          {title}
        </h3>
        
        {fields && fields.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            {fields.map((field, idx) => (
              <div key={idx} className={cn(
                "flex flex-col p-3 rounded-lg bg-fd-background/40 border border-fd-border/30",
                field.inline ? "md:col-span-4" : "col-span-full"
              )}>
                <span className="text-[10px] uppercase tracking-wider font-bold text-fd-muted-foreground/70 mb-1">
                  {field.name}
                </span>
                <span className="text-sm font-semibold text-fd-foreground/90">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-sm text-fd-muted-foreground leading-relaxed pl-1">
          {children}
        </div>
      </div>
    </div>
  );
}