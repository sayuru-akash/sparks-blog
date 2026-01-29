// API Response types
export interface HttpResponse {
  message: string;
  error?: string;
}

// Newsletter types
export interface SubscribeRequest {
  email: string;
}

export interface SubscribeResponse extends HttpResponse {
  email?: string;
}

// Ghost CMS types
export interface NavigationItem {
  label: string;
  url: string;
}

// Post types (extending Ghost types)
export interface PostMetadata {
  title: string;
  excerpt: string;
  featureImage?: string;
  publishedAt?: string;
  readingTime?: number;
}

export interface Author {
  name: string;
  slug: string;
  profileImage?: string;
  bio?: string;
  website?: string;
}

export interface Tag {
  name: string;
  slug: string;
  description?: string;
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
}

// Environment variable types
export interface EnvConfig {
  GHOST_URL: string;
  CONTENT_KEY: string;
  NEXT_PUBLIC_SITE_URL?: string;
}
