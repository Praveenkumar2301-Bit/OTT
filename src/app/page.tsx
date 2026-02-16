import { cookies } from 'next/headers';
import { HeroSection, HeroTagline } from '@/components/home/HeroSection';
import { Carousel } from '@/components/content/Carousel';
import { getCarouselSections } from '@/lib/mock-data';
import { getStrings, LANG_COOKIE } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get(LANG_COOKIE)?.value ?? 'ta') as Lang;
  const t = getStrings(lang);
  const carouselTitleMap: Record<string, string> = {
    'tamil-trending': t.trendingTamilShorts,
    'new': t.newReleases,
    'debuts': t.directorDebuts,
    'regional': t.regionalPicks,
  };
  const sections = getCarouselSections();

  return (
    <>
      <div className="pt-[72px]">
        <HeroSection />
      </div>
      <div className="py-6">
        <HeroTagline />
      </div>
      <div className="space-y-12 py-10 sm:space-y-14">
        {sections.map((section) => (
          <Carousel
            key={section.id}
            title={carouselTitleMap[section.id] ?? section.title}
            items={section.items}
          />
        ))}
      </div>
    </>
  );
}
