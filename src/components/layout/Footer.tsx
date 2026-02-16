'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/[0.06] bg-zentra-surface/80 mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4 md:gap-12 md:items-start">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold tracking-tight text-white">ZENTRA</span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zentra-muted">
              {t.footerTagline}
            </p>
          </div>
          <div className="md:pt-0.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zentra-muted mb-4">
              {t.footerExplore}
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="text-sm text-zentra-muted hover:text-white transition-colors">
                  {t.footerBrowse}
                </Link>
              </li>
              <li>
                <Link href="/creators" className="text-sm text-zentra-muted hover:text-white transition-colors">
                  {t.footerCreators}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-sm text-zentra-muted hover:text-white transition-colors">
                  {t.footerPublish}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:pt-0.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zentra-muted mb-4">
              © {new Date().getFullYear()}
            </p>
            <p className="text-sm text-zentra-muted">
              {t.footerCopyright}
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-zentra-muted/80 max-w-3xl">
            {t.footerDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
