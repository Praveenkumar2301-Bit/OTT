import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { CREATORS } from '@/lib/mock-data';
import { formatCount } from '@/lib/utils';
import { getStrings, LANG_COOKIE, creatorName, creatorBio } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

export default async function CreatorsListPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get(LANG_COOKIE)?.value ?? 'ta') as Lang;
  const t = getStrings(lang);
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-display-lg font-bold text-white tracking-tight mb-2">
          {t.creatorsTitle}
        </h1>
        <p className="text-zentra-muted text-lg max-w-2xl mb-12">
          {t.creatorsSubtitle}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CREATORS.map((creator) => (
            <Link
              key={creator.id}
              href={`/creators/${creator.slug}`}
              className="group rounded-2xl bg-zentra-card/80 border border-white/[0.06] overflow-hidden shadow-card hover:shadow-card-hover hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="relative aspect-square">
                <Image
                  src={creator.avatarUrl}
                  alt={creatorName(creator, lang)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white group-hover:text-zentra-gold transition-colors">
                  {creatorName(creator, lang)}
                </h3>
                <p className="text-sm text-zentra-muted mt-1.5 line-clamp-2 leading-relaxed">
                  {creatorBio(creator, lang)}
                </p>
                <p className="text-xs text-zentra-muted mt-3">
                  {formatCount(creator.totalViews)} {t.views} · {creator.shortCount} {t.shortsCount}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
