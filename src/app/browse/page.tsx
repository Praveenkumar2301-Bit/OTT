import { cookies } from 'next/headers';
import { getContentsWithCreators, CATEGORIES } from '@/lib/mock-data';
import { Carousel } from '@/components/content/Carousel';
import { getStrings, LANG_COOKIE, categoryName } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

export default async function BrowsePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get(LANG_COOKIE)?.value ?? 'ta') as Lang;
  const t = getStrings(lang);
  const all = getContentsWithCreators();
  const byCategory = CATEGORIES.map((cat) => ({
    ...cat,
    items: all.filter((c) => c.categorySlug === cat.slug),
  })).filter((s) => s.items.length > 0);

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <h1 className="font-display text-display-lg font-bold text-white tracking-tight mb-2">
          {t.browseTitle}
        </h1>
        <p className="text-zentra-muted text-lg max-w-2xl leading-relaxed">
          {t.browseSubtitle}
        </p>
      </div>
      <div className="space-y-12 sm:space-y-14">
        {byCategory.map((section) => (
          <Carousel
            key={section.slug}
            title={categoryName(section, lang)}
            items={section.items}
          />
        ))}
        {byCategory.length === 0 && (
          <p className="text-center text-zentra-muted py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {t.noContentInCategories}
          </p>
        )}
      </div>
    </div>
  );
}
