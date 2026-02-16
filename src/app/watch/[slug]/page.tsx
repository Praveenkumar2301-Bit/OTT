import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getContentBySlug, getSuggestedContents } from '@/lib/mock-data';
import { ContentCard } from '@/components/content/ContentCard';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import { getStrings, LANG_COOKIE, contentTitle, contentLanguage, creatorName } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WatchPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) notFound();
  const cookieStore = await cookies();
  const lang = (cookieStore.get(LANG_COOKIE)?.value ?? 'ta') as Lang;
  const t = getStrings(lang);
  const suggested = getSuggestedContents(slug, 4);

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px] lg:gap-10 lg:items-start">
          <div className="min-w-0">
            <VideoPlayer content={content} />
            <div className="mt-5">
              <h1 className="font-display text-display-lg font-bold text-white tracking-tight">
                {contentTitle(content, lang)}
              </h1>
              <p className="mt-2 text-sm text-zentra-muted">
                {creatorName(content.director, lang)} · {content.durationMinutes} {t.min} · {contentLanguage(content, lang)}
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-lg font-bold text-white mb-4">
              {t.moreLikeThis}
            </h2>
            <div className="space-y-4">
              {suggested.map((item) => (
                <ContentCard key={item.id} content={item} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
