'use client';

import { cn } from '../lib/cn';
import { type ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  /**
   * Optional badge text (e.g., "GET", "POST", "WebSocket")
   */
  badge?: string;
  /**
   * Color variant for the badge.
   */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const badgeVariants = {
  default: 'bg-fd-primary/10 text-fd-primary border-fd-primary/20',
  success: 'bg-green-500/10 text-green-500 border-green-500/20',
  warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  error: 'bg-red-500/10 text-red-500 border-red-500/20',
  info: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
};

export function InfoCard({
  title,
  badge,
  variant = 'default',
  description,
  children,
  className,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl border p-6 transition-all duration-300',
        'border-fd-border/50 bg-fd-card/30 backdrop-blur-xl',
        'hover:border-fd-accent/50 hover:shadow-lg hover:shadow-fd-accent/5',
        className
      )}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-white/5 dark:to-transparent pointer-events-none" />

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-fd-foreground">
              {title}
            </h3>
            {description && (
              <div className="text-sm text-fd-muted-foreground">
                {description}
              </div>
            )}
          </div>
          {badge && (
            <span
              className={cn(
                'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors',
                badgeVariants[variant]
              )}
            >
              {badge}
            </span>
          )}
        </div>

        {children && (
          <div className="mt-2 text-sm text-fd-foreground/90 space-y-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
