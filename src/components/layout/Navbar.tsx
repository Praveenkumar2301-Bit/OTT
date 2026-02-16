'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const navHrefs = [
  { href: '/', key: 'navHome' as const },
  { href: '/browse', key: 'navBrowse' as const },
  { href: '/creators', key: 'navCreators' as const },
  { href: '/admin', key: 'navPublish' as const },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLanguage } = useLanguage();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.06] shadow-nav"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            ZENTRA
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-zentra-gold" aria-hidden />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navHrefs.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-white',
                pathname === link.href
                  ? 'text-white'
                  : 'text-zentra-muted hover:text-white/90'
              )}
            >
              {t[link.key]}
            </Link>
          ))}
          <div className="flex items-center gap-0.5 rounded-full bg-white/5 border border-white/10 pl-1 pr-1 py-0.5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={cn(
                'text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200',
                lang === 'en'
                  ? 'bg-zentra-gold text-white shadow-sm'
                  : 'text-zentra-muted hover:text-white'
              )}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ta')}
              className={cn(
                'text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200',
                lang === 'ta'
                  ? 'bg-zentra-gold text-white shadow-sm'
                  : 'text-zentra-muted hover:text-white'
              )}
              aria-label="Tamil"
            >
              தமிழ்
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-0.5 rounded-full bg-white/5 border border-white/10 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={cn('px-2.5 py-1 rounded-full', lang === 'en' ? 'bg-zentra-gold text-white' : 'text-zentra-muted')}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ta')}
              className={cn('px-2.5 py-1 rounded-full', lang === 'ta' ? 'bg-zentra-gold text-white' : 'text-zentra-muted')}
            >
              தமிழ்
            </button>
          </div>
          <button
            type="button"
            className="p-2 text-zentra-muted hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-white/[0.06] px-4 py-4 flex flex-col gap-3 sm:px-6 lg:px-8"
        >
          {navHrefs.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'text-sm font-medium py-2',
                pathname === link.href ? 'text-zentra-gold' : 'text-zentra-muted hover:text-white'
              )}
            >
              {t[link.key]}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
