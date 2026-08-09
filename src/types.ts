export interface FilmEntry {
  year: number | string;
  title: string;
  roleNote?: string;
  isPre2015?: boolean;
  highlight?: boolean;
  tag?: string;
  description?: string;
}

export interface IndustryHit {
  title: string;
  year: number;
  significance: string;
  badge?: string;
}

export interface AwardMilestone {
  title: string;
  subtitle: string;
  category: 'award' | 'honor' | 'legacy';
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  year?: string | number;
  src: string;
  category: string;
  aspectRatio?: string;
}

export interface FanWish {
  id: string;
  name: string;
  location: string;
  message: string;
  timestamp: string;
  isVerifiedFan?: boolean;
}
