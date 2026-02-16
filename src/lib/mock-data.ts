/**
 * ZENTRA – Mock data for POC demo.
 * Sample image URLs are for demo only (replace with licensed content in production).
 */

import type { Content, Creator, Category, Language } from './types';

// Demo-only image sources (Unsplash – verified working IDs, cinema/film themed for Tamil short films)
const IMG = {
  thumb1: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop',
  thumb2: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop',
  thumb3: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop',
  thumb4: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=225&fit=crop',
  thumb5: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop',
  thumb6: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=225&fit=crop',
  thumb7: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=225&fit=crop',
  thumb8: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop',
  director1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  director2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  director3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  director4: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  hero: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
};

// Tamil first; platform is India-focused with emphasis on Tamil short films
export const LANGUAGES: Language[] = [
  { code: 'ta', name: 'Tamil' },
  { code: 'hi', name: 'Hindi' },
  { code: 'en', name: 'English' },
  { code: 'te', name: 'Telugu' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'bn', name: 'Bengali' },
  { code: 'pa', name: 'Punjabi' },
];

export const CATEGORIES: Category[] = [
  { slug: 'tamil-shorts', name: 'தமிழ் குறுந்திரைப்படங்கள்', nameEn: 'Tamil Shorts', description: 'தமிழில் குறுந்திரைப்படங்கள்', descriptionEn: 'Short films in Tamil' },
  { slug: 'drama', name: 'நாடகம்', nameEn: 'Drama', description: 'கதாபாத்திரம் சார்ந்த கதைகள்', descriptionEn: 'Character-driven narratives' },
  { slug: 'thriller', name: 'த்ரில்லர்', nameEn: 'Thriller', description: 'பதற்றம் மற்றும் சஸ்பென்ஸ்', descriptionEn: 'Suspense and tension' },
  { slug: 'comedy', name: 'நகைச்சுவை', nameEn: 'Comedy', description: 'இலகுவான கதைகள்', descriptionEn: 'Light-hearted stories' },
  { slug: 'documentary', name: 'ஆவணப்படம்', nameEn: 'Documentary', description: 'இந்தியாவின் உண்மை கதைகள்', descriptionEn: 'Real stories from India' },
  { slug: 'regional', name: 'பிராந்திய தேர்வுகள்', nameEn: 'Regional Picks', description: 'தமிழ்நாடு மற்றும் இந்தியாவின் கதைகள்', descriptionEn: 'Stories from Tamil Nadu & India' },
];

export const CREATORS: Creator[] = [
  {
    id: 'cr1',
    name: 'கார்த்திக் சுப்பிரமணியன்',
    nameEn: 'Karthik Subramanian',
    slug: 'karthik-subramanian',
    bio: 'சென்னை அடிப்படையிலான இயக்குநர். தமிழ் குறுந்திரைப்படங்கள் மற்றும் இண்டி கதைகள். NFDC ஸ்கிரிப்ட் லேப் முன்னாள் மாணவர்.',
    bioEn: 'Chennai-based director. Tamil short films and indie narratives. NFDC script lab alumnus.',
    avatarUrl: IMG.director1,
    totalViews: 1240000,
    totalEarnings: 340000,
    shortCount: 8,
    joinedAt: '2023-06-01',
  },
  {
    id: 'cr2',
    name: 'லட்சுமி பிரியா',
    nameEn: 'Lakshmi Priya',
    slug: 'lakshmi-priya',
    bio: 'மதுரையைச் சேர்ந்த தமிழ் திரைப்பட இயக்குநர். சென்னை சர்வதேச திரைப்பட விழாவில் அறிமுக குறுந்திரைப்படம் தேர்ந்தெடுக்கப்பட்டது.',
    bioEn: 'Tamil filmmaker from Madurai. Debut short selected at Chennai International Film Festival.',
    avatarUrl: IMG.director2,
    totalViews: 890000,
    totalEarnings: 210000,
    shortCount: 5,
    joinedAt: '2023-08-15',
  },
  {
    id: 'cr3',
    name: 'அர்ஜுன் கிருஷ்ணன்',
    nameEn: 'Arjun Krishnan',
    slug: 'arjun-krishnan',
    bio: 'தமிழ் மற்றும் மலையாள சினிமா. அடையாளம், புலம்பெயர்வு மற்றும் தமிழ்நாடு கதைகள்.',
    bioEn: 'Tamil & Malayalam cinema. Identity, migration and Tamil Nadu stories.',
    avatarUrl: IMG.director3,
    totalViews: 2100000,
    totalEarnings: 520000,
    shortCount: 12,
    joinedAt: '2023-02-20',
  },
  {
    id: 'cr4',
    name: 'திவ்யா வெங்கடேசன்',
    nameEn: 'Divya Venkatesan',
    slug: 'divya-venkatesan',
    bio: 'ஆவணப்பட இயக்குநர். தமிழ்நாடு மற்றும் தென்னிந்தியாவின் உண்மை கதைகள்.',
    bioEn: 'Documentary filmmaker. Real stories from Tamil Nadu and South India.',
    avatarUrl: IMG.director4,
    totalViews: 560000,
    totalEarnings: 98000,
    shortCount: 4,
    joinedAt: '2024-01-10',
  },
];

// YouTube unlisted/sample embeds – demo only (replace with real content)
const YT = (id: string) => `https://www.youtube.com/embed/${id}?rel=0`;
const sampleVideoId = 'dQw4w9WgXcQ'; // placeholder – use real unlisted IDs in production

export const CONTENTS: Content[] = [
  {
    id: 'c1',
    slug: 'oru-vidhiyaaga',
    title: 'ஒரு விதியாக',
    titleEn: 'As Fate Would Have It',
    description: 'சென்னையிலிருந்து மதுரைக்கு இரவு பேருந்தில் தந்தையும் மகளும் பல ஆண்டுகளின் மௌனத்தை எதிர்கொள்கிறார்கள். தமிழ் குறுந்திரைப்படம்.',
    descriptionEn: 'A night bus from Chennai to Madurai forces a father and daughter to confront years of silence. Tamil short film.',
    thumbnailUrl: IMG.thumb1,
    posterUrl: IMG.thumb1,
    durationMinutes: 18,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'தமிழ் குறுந்திரைப்படங்கள்',
    categoryEn: 'Tamil Shorts',
    categorySlug: 'tamil-shorts',
    directorId: 'cr1',
    status: 'approved',
    viewCount: 420000,
    revenue: 95000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-01-15',
    createdAt: '2024-01-01',
    tags: ['குடும்பம்', 'தமிழ்நாடு', 'சமரசம்'],
    tagsEn: ['family', 'Tamil Nadu', 'reconciliation'],
  },
  {
    id: 'c2',
    slug: 'nilave-pol',
    title: 'நிலாவே போல்',
    titleEn: 'Like the Moon',
    description: 'சென்னை அக்கம் குற்றத்திற்கு சாட்சியாக இருந்த ஒருவர் பாதுகாப்புக்கும் உண்மைக்கும் இடையே தேர்வு செய்ய வேண்டும். தமிழ் த்ரில்லர் குறுந்திரைப்படம்.',
    descriptionEn: 'A witness to a crime in a Chennai neighbourhood must choose between safety and truth. Tamil thriller short.',
    thumbnailUrl: IMG.thumb2,
    durationMinutes: 22,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'த்ரில்லர்',
    categoryEn: 'Thriller',
    categorySlug: 'thriller',
    directorId: 'cr2',
    status: 'approved',
    viewCount: 310000,
    revenue: 72000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-02-01',
    createdAt: '2024-01-20',
    tags: ['த்ரில்லர்', 'சென்னை'],
    tagsEn: ['thriller', 'Chennai'],
  },
  {
    id: 'c3',
    slug: 'mango-seasons',
    title: 'மாம்பழ காலம்',
    titleEn: 'Mango Seasons',
    description: 'தமிழ்நாட்டில் ஒரு கோடை காலத்தில் மூன்று தலைமுறை குடும்பம். தமிழ் குறுந்திரைப்படம்.',
    descriptionEn: 'Three generations of a family during one summer in Tamil Nadu. Tamil short film.',
    thumbnailUrl: IMG.thumb3,
    durationMinutes: 25,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'தமிழ் குறுந்திரைப்படங்கள்',
    categoryEn: 'Tamil Shorts',
    categorySlug: 'tamil-shorts',
    directorId: 'cr3',
    status: 'approved',
    viewCount: 680000,
    revenue: 165000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-01-28',
    createdAt: '2024-01-10',
    tags: ['குடும்பம்', 'தமிழ்நாடு', 'நோஸ்டால்ஜியா'],
    tagsEn: ['family', 'Tamil Nadu', 'nostalgia'],
  },
  {
    id: 'c4',
    slug: 'chai-and-chat',
    title: 'சாய் பேசி',
    titleEn: 'Chai & Chat',
    description: 'கோயம்புத்தூரில் சாலை ஓர தேநீர் கடையில் நகைச்சுவை. தமிழ் நகைச்சுவை குறுந்திரைப்படம்.',
    descriptionEn: 'A comedy of errors at a roadside tea stall in Coimbatore. Tamil comedy short.',
    thumbnailUrl: IMG.thumb4,
    durationMinutes: 12,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'நகைச்சுவை',
    categoryEn: 'Comedy',
    categorySlug: 'comedy',
    directorId: 'cr1',
    status: 'approved',
    viewCount: 520000,
    revenue: 88000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-02-10',
    createdAt: '2024-02-01',
    tags: ['நகைச்சுவை', 'கோயம்புத்தூர்'],
    tagsEn: ['comedy', 'Coimbatore'],
  },
  {
    id: 'c5',
    slug: 'voices-from-the-field',
    title: 'வயலிலிருந்து குரல்கள்',
    titleEn: 'Voices from the Field',
    description: 'தமிழ்நாடு மற்றும் தென்னிந்தியாவின் விவசாயிகள் தங்கள் கதைகளை தங்கள் சொந்த வார்த்தைகளில் சொல்கிறார்கள். இந்திய ஆவண குறுந்திரைப்படம்.',
    descriptionEn: 'Farmers in Tamil Nadu and South India tell their stories in their own words. Indian documentary short.',
    thumbnailUrl: IMG.thumb5,
    durationMinutes: 30,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'ஆவணப்படம்',
    categoryEn: 'Documentary',
    categorySlug: 'documentary',
    directorId: 'cr4',
    status: 'approved',
    viewCount: 190000,
    revenue: 45000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-02-05',
    createdAt: '2024-01-25',
    tags: ['ஆவணப்படம்', 'தமிழ்நாடு', 'விவசாயம்'],
    tagsEn: ['documentary', 'Tamil Nadu', 'agriculture'],
  },
  {
    id: 'c6',
    slug: 'rendu-ulagangal',
    title: 'இரண்டு உலகங்கள்',
    titleEn: 'Two Worlds',
    description: 'சென்னை மற்றும் கிராமத்தில் ஒரு புலம்பெயர் பணியாளரின் இரட்டை வாழ்க்கை. அடையாளம் பற்றிய தமிழ் குறுந்திரைப்படம்.',
    descriptionEn: 'A migrant worker\'s double life in Chennai and the village. Tamil short film on identity.',
    thumbnailUrl: IMG.thumb6,
    durationMinutes: 20,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'தமிழ் குறுந்திரைப்படங்கள்',
    categoryEn: 'Tamil Shorts',
    categorySlug: 'tamil-shorts',
    directorId: 'cr3',
    status: 'approved',
    viewCount: 410000,
    revenue: 102000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-02-12',
    createdAt: '2024-02-05',
    tags: ['புலம்பெயர்வு', 'சென்னை', 'அடையாளம்'],
    tagsEn: ['migration', 'Chennai', 'identity'],
  },
  {
    id: 'c7',
    slug: 'kadhal-kavithai',
    title: 'காதல் கவிதை',
    titleEn: 'Love Poem',
    description: 'மதுரையில் ஒரு பெண் தனது பாட்டியின் அனுப்பாத கடிதங்களை கண்டுபிடிக்கிறாள். தமிழ் நாடக குறுந்திரைப்படம்.',
    descriptionEn: 'A woman in Madurai discovers her grandmother\'s unsent letters. Tamil drama short.',
    thumbnailUrl: IMG.thumb7,
    durationMinutes: 15,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'நாடகம்',
    categoryEn: 'Drama',
    categorySlug: 'drama',
    directorId: 'cr2',
    status: 'approved',
    viewCount: 275000,
    revenue: 62000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-02-08',
    createdAt: '2024-01-28',
    tags: ['குடும்பம்', 'மதுரை', 'மரபு'],
    tagsEn: ['family', 'Madurai', 'legacy'],
  },
  {
    id: 'c8',
    slug: 'iravu-shift',
    title: 'இரவு ஷிப்ட்',
    titleEn: 'Night Shift',
    description: 'சென்னை மாலில் பாதுகாப்பு காவலர்கள் எதிர்பாராத பிணைப்பை உருவாக்குகிறார்கள். தமிழ் குறுந்திரைப்படம்.',
    descriptionEn: 'Security guards at a Chennai mall form an unexpected bond. Tamil short film.',
    thumbnailUrl: IMG.thumb8,
    durationMinutes: 14,
    language: 'தமிழ்',
    languageEn: 'Tamil',
    languageCode: 'ta',
    category: 'தமிழ் குறுந்திரைப்படங்கள்',
    categoryEn: 'Tamil Shorts',
    categorySlug: 'tamil-shorts',
    directorId: 'cr1',
    status: 'approved',
    viewCount: 380000,
    revenue: 78000,
    videoUrl: YT(sampleVideoId),
    videoType: 'youtube',
    releasedAt: '2024-02-14',
    createdAt: '2024-02-10',
    tags: ['சென்னை', 'நட்பு', 'நகரம்'],
    tagsEn: ['Chennai', 'friendship', 'urban'],
  },
];

// Attach director to each content for convenience
export function getContentsWithCreators(): Content[] {
  return CONTENTS.map((c) => ({
    ...c,
    director: CREATORS.find((cr) => cr.id === c.directorId),
  }));
}

export function getFeaturedForHero(): Content[] {
  const withCreators = getContentsWithCreators();
  // Feature Tamil short films on hero
  return [withCreators[0], withCreators[2], withCreators[3]];
}

export function getContentBySlug(slug: string): Content | undefined {
  const withCreators = getContentsWithCreators();
  return withCreators.find((c) => c.slug === slug);
}

export function getCreatorBySlug(slug: string): Creator | undefined {
  return CREATORS.find((c) => c.slug === slug);
}

export function getContentsByCreatorId(creatorId: string): Content[] {
  return getContentsWithCreators().filter((c) => c.directorId === creatorId);
}

/** Suggested "up next" content (exclude current slug) */
export function getSuggestedContents(excludeSlug: string, limit = 4): Content[] {
  return getContentsWithCreators()
    .filter((c) => c.slug !== excludeSlug)
    .slice(0, limit);
}

export function getCarouselSections(): { id: string; title: string; slug: string; contentIds: string[]; items: Content[] }[] {
  const withCreators = getContentsWithCreators();
  return [
    { id: 'tamil-trending', title: 'Trending Tamil Shorts', slug: 'tamil-trending', contentIds: ['c1', 'c3', 'c4', 'c6', 'c8'] },
    { id: 'new', title: 'New Tamil & Indian Releases', slug: 'new-releases', contentIds: ['c8', 'c6', 'c7', 'c4', 'c5'] },
    { id: 'debuts', title: 'Tamil Director Debuts', slug: 'director-debuts', contentIds: ['c2', 'c5', 'c7', 'c1'] },
    { id: 'regional', title: 'Tamil Nadu & Indian Picks', slug: 'regional', contentIds: ['c3', 'c6', 'c7', 'c5', 'c1'] },
  ].map((section) => ({
    ...section,
    items: section.contentIds
      .map((id) => withCreators.find((c) => c.id === id))
      .filter((c): c is Content => !!c),
  }));
}

export { IMG };
