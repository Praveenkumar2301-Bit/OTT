import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { getCreatorBySlug, getContentsByCreatorId } from '@/lib/mock-data';
import { formatCount, formatINR } from '@/lib/utils';
import { getStrings, LANG_COOKIE, creatorName, creatorBio } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { ContentCard } from '@/components/content/ContentCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);
  if (!creator) notFound();
  const cookieStore = await cookies();
  const lang = (cookieStore.get(LANG_COOKIE)?.value ?? 'ta') as Lang;
  const t = getStrings(lang);
  const shorts = getContentsByCreatorId(creator.id);

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start">
          <div className="flex-shrink-0">
            <div className="relative h-48 w-48 rounded-2xl overflow-hidden bg-zentra-card shadow-card border border-white/[0.06]">
              <Image
                src={creator.avatarUrl}
                alt={creatorName(creator, lang)}
                fill
                className="object-cover"
                sizes="192px"
                priority
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zentra-muted">
              <span>{formatCount(creator.totalViews)} {t.totalViews}</span>
              <span>{creator.shortCount} {t.shortsCount}</span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-display-lg font-bold text-white tracking-tight">
              {creatorName(creator, lang)}
            </h1>
            <p className="mt-3 text-zentra-muted leading-relaxed max-w-2xl">
              {creatorBio(creator, lang)}
            </p>
            <div className="mt-6 flex flex-wrap gap-8 rounded-2xl bg-zentra-card/80 border border-white/[0.06] p-6 shadow-card">
              <div>
                <p className="text-xs font-medium text-zentra-gold uppercase tracking-wider">
                  {t.totalViews}
                </p>
                <p className="text-xl font-semibold text-white mt-1">
                  {formatCount(creator.totalViews)}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-zentra-gold uppercase tracking-wider">
                  {t.earningsDemo}
                </p>
                <p className="text-xl font-semibold text-white mt-1">
                  {formatINR(creator.totalEarnings)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-14">
          <h2 className="font-display text-display-lg font-bold text-white tracking-tight mb-6">
            {t.publishedShorts}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shorts.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
