import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { Play, Heart, Share2 } from 'lucide-react';
import { getContentBySlug } from '@/lib/mock-data';
import { formatCount, formatDurationTamil } from '@/lib/utils';
import {
  getStrings,
  LANG_COOKIE,
  contentTitle,
  contentDescription,
  contentCategory,
  contentLanguage,
  contentTags,
  creatorName,
  creatorBio,
} from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ContentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) notFound();
  const cookieStore = await cookies();
  const lang = (cookieStore.get(LANG_COOKIE)?.value ?? 'ta') as Lang;
  const t = getStrings(lang);
  const director = content.director;

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,380px] lg:gap-10 lg:items-start">
          <div className="min-w-0">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zentra-card shadow-card border border-white/[0.06]">
              <Image
                src={content.posterUrl ?? content.thumbnailUrl}
                alt={contentTitle(content, lang)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zentra-bg/95 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-4">
                <Link href={`/watch/${content.slug}`}>
                  <Button size="lg" className="gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    {t.play}
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Heart className="w-5 h-5" />
                  {t.save}
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <Share2 className="w-5 h-5" />
                  {t.share}
                </Button>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="font-display text-display-lg font-bold text-white tracking-tight">
                {contentTitle(content, lang)}
              </h1>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zentra-muted">
                <span>{formatDurationTamil(content.durationMinutes, t.min)}</span>
                <span>{contentLanguage(content, lang)}</span>
                <span>{contentCategory(content, lang)}</span>
                <span>{formatCount(content.viewCount)} {t.views}</span>
              </div>
              <p className="mt-5 text-zentra-muted leading-relaxed text-[15px]">
                {contentDescription(content, lang)}
              </p>
              {contentTags(content, lang).length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {contentTags(content, lang).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs text-zentra-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="min-w-0">
            {director && (
              <div className="rounded-2xl bg-zentra-card/80 border border-white/[0.06] shadow-card p-6 sticky top-28">
                <p className="text-xs font-semibold text-zentra-gold uppercase tracking-[0.15em] mb-4">
                  {t.director}
                </p>
                <Link
                  href={`/creators/${director.slug}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={director.avatarUrl}
                      alt={creatorName(director, lang)}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-zentra-gold transition-colors">
                      {creatorName(director, lang)}
                    </h3>
                    <p className="text-sm text-zentra-muted/80 line-clamp-2">
                      {creatorBio(director, lang)}
                    </p>
                  </div>
                </Link>
                <div className="mt-6 pt-6 border-t border-zentra-border/50">
                  <p className="text-xs text-zentra-muted/70 mb-2">
                    {t.supportCreatorDemo}
                  </p>
                  <Button variant="gold" className="w-full" size="lg">
                    {t.supportCreator} {creatorName(director, lang)}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
