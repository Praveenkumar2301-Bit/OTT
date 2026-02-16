'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentCard } from './ContentCard';
import type { Content } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CarouselProps {
  title: string;
  items: Content[];
  className?: string;
}

export function Carousel({ title, items, className }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className={cn('relative', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="font-display text-display-lg font-bold text-white tracking-tight border-b-2 border-zentra-gold pb-1.5 shrink-0">
            {title}
          </h2>
          <div className="flex gap-2 shrink-0 pb-0.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zentra-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zentra-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth pb-6 -mx-4 sm:-mx-6 lg:-mx-8"
      >
        <div className="flex gap-5 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 min-w-0">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="flex-shrink-0 w-[260px] sm:w-[280px]"
            >
              <ContentCard content={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
