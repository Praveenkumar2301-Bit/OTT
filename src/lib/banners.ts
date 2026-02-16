/**
 * Hero banners: images from /Images folder.
 * Title = file name; one-liner derived from image name.
 */
export interface BannerItem {
  src: string;
  title: string;
  oneLiner: string;
}

const BANNERS: BannerItem[] = [
  {
    src: '/banners/Dhasavatharam.png',
    title: 'Dhasavatharam',
    oneLiner: 'An epic of ten avatars.',
  },
  {
    src: '/banners/Mahbaratham.png',
    title: 'Mahbaratham',
    oneLiner: 'The great epic of valor and destiny.',
  },
  {
    src: '/banners/Velir.png',
    title: 'Velir',
    oneLiner: 'A saga of heritage and power.',
  },
];

export function getBanners(): BannerItem[] {
  return BANNERS;
}
