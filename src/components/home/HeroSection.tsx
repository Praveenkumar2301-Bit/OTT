'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBanners } from '@/lib/banners';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const banners = getBanners();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = banners[activeIndex];
  const { t } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, [banners.length]);

  if (!active) return null;

  return (
    <section className="relative h-[75vh] min-h-[480px] w-full overflow-hidden">
      {/* Background images – only banners from Images folder */}
      {banners.map((banner, i) => (
        <motion.div
          key={banner.src}
          initial={false}
          animate={{
            opacity: i === activeIndex ? 1 : 0,
            scale: i === activeIndex ? 1 : 1.05,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={banner.src}
            alt={banner.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-28 pt-8 sm:px-6 md:pt-12 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display text-display-xl font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {active.title}
          </motion.p>
          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="mt-3 max-w-xl text-base md:text-lg text-white/90 line-clamp-2 leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            {active.oneLiner}
          </motion.p>
          <motion.div
            key={`btns-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"
          >
            <Link href="/browse">
              <Button size="lg" className="gap-2 shadow-glow">
                <Play className="w-5 h-5 fill-current" />
                {t.play}
              </Button>
            </Link>
            <Link href="/browse">
              <Button variant="secondary" size="lg">
                {t.moreInfo}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Banner strip – align with hero content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zentra-bg via-zentra-bg/80 to-transparent pt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-zentra-muted uppercase tracking-[0.2em] mb-3">
            {t.featuredShorts}
          </p>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 sm:gap-4">
          {banners.map((banner, i) => (
            <button
              key={banner.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="flex-shrink-0 w-44 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-card"
              style={{
                borderColor: i === activeIndex ? 'var(--zentra-gold)' : 'rgba(255,255,255,0.08)',
                opacity: i === activeIndex ? 1 : 0.8,
                transform: i === activeIndex ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <Image
                src={banner.src}
                alt={banner.title}
                width={176}
                height={99}
                className="object-cover w-full aspect-video"
              />
            </button>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroTagline() {
  const { t } = useLanguage();
  return (
    <p className="text-center text-zentra-muted font-display text-lg md:text-xl tracking-wide max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {t.tagline}
    </p>
  );
}
