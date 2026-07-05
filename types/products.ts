export interface Product {
  id: number;
  name: string;
  slug: string;

  brand: string;
  category: string;

  description: string;

  price: number;
  originalPrice?: number;
  discountPercentage?: number;

  rating: number;
  reviewCount: number;

  stock: number;

  thumbnail: string;
  images: string[];

  colors?: string[];
  sizes?: string[];

  featured?: boolean;
  newArrival?: boolean;
}