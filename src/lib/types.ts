/**
 * ZENTRA OTT – Production-ready data models (POC uses mock data).
 * Designed for future PostgreSQL / SQLite integration.
 */

export type ContentStatus = 'draft' | 'pending' | 'approved' | 'rejected';

export interface Creator {
  id: string;
  name: string;
  nameEn?: string;
  slug: string;
  bio: string;
  bioEn?: string;
  avatarUrl: string;
  totalViews: number;
  totalEarnings: number; // mock, in INR
  shortCount: number;
  joinedAt: string; // ISO date
}

export interface Content {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  thumbnailUrl: string;
  posterUrl?: string;
  durationMinutes: number;
  language: string;
  languageEn?: string;
  languageCode: string;
  category: string;
  categoryEn?: string;
  categorySlug: string;
  directorId: string;
  director?: Creator;
  status: ContentStatus;
  viewCount: number;
  revenue: number; // mock, in INR
  videoUrl: string; // YouTube embed URL or future HLS
  videoType: 'youtube' | 'html5' | 'hls';
  releasedAt: string;
  createdAt: string;
  tags?: string[];
  tagsEn?: string[];
}

export interface Category {
  slug: string;
  name: string;
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface CarouselSection {
  id: string;
  title: string;
  slug: string;
  items: Content[];
}

export interface AdminStats {
  totalContent: number;
  pendingApprovals: number;
  totalViews: number;
  totalRevenue: number;
  viewsChart: { label: string; value: number }[];
  revenueChart: { label: string; value: number }[];
}
