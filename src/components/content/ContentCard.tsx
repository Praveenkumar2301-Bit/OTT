'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import type { Content } from '@/lib/types';
import { formatCount, formatDurationTamil } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { contentTitle, contentLanguage, creatorName } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface ContentCardProps {
  content: Content;
  variant?: 'default' | 'large' | 'minimal' | 'compact';
  priority?: boolean;
  className?: string;
}

export function ContentCard({
  content,
  variant = 'default',
  priority = false,
  className,
}: ContentCardProps) {
  const href = `/watch/${content.slug}`;
  const isLarge = variant === 'large';
  const isCompact = variant === 'compact';
  const { t, lang } = useLanguage();

  return (
    <motion.div
      className={cn('group relative', className)}
      whileHover={{ scale: isLarge ? 1.02 : 1.03, zIndex: 10 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={href} className={cn('block', isCompact && 'flex gap-3')}>
        <div
          className={cn(
            'relative overflow-hidden rounded-xl bg-zentra-card flex-shrink-0 shadow-card border border-white/[0.06] transition-all duration-300 group-hover:shadow-card-hover group-hover:border-white/[0.1]',
            isCompact ? 'w-36 aspect-video' : 'aspect-video'
          )}
        >
          <Image
            src={content.thumbnailUrl}
            alt={contentTitle(content, lang)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={isLarge ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 280px'}
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-sm text-white/95">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-zentra-gold shadow-md">
                <Play className="w-4 h-4 fill-current text-white" />
              </span>
              <span>{formatDurationTamil(content.durationMinutes, t.min)}</span>
              <span className="text-white/50">·</span>
              <span>{formatCount(content.viewCount)} {t.views}</span>
            </div>
          </div>
          {!isLarge && (
            <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-xs text-white/95 border border-white/10">
              {content.durationMinutes} {t.min}
            </div>
          )}
        </div>
        <div className={cn('mt-2.5 min-w-0', isLarge && 'mt-3', isCompact && 'mt-0 flex-1')}>
          <h3
            className={cn(
              'font-semibold text-white line-clamp-2 group-hover:text-zentra-gold transition-colors duration-200',
              isLarge ? 'text-lg' : 'text-sm',
              isCompact && 'line-clamp-2 text-sm'
            )}
          >
            {contentTitle(content, lang)}
          </h3>
          {variant !== 'minimal' && variant !== 'compact' && (
            <p className="mt-1 text-xs text-zentra-muted line-clamp-1">
              {creatorName(content.director, lang) || contentLanguage(content, lang)}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
