import type { ReactNode } from 'react';

export const ReviewBadge = ({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'verified' | 'warning' | 'disputable' }) => {
  const styles = {
    default: 'bg-zinc-200 text-zinc-600',
    verified: 'bg-black text-white',
    warning: 'bg-brand-orange text-white',
    disputable: 'bg-zinc-100 text-zinc-500 border border-black/20'
  };
  return (
    <span className={`px-2 py-1 text-[10px] font-headline font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};
