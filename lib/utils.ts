import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely.
 *
 * Example:
 * cn("px-4", condition && "bg-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency in Indian Rupees.
 */
export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Calculate discount percentage.
 */
export function calculateDiscount(
  originalPrice: number,
  discountedPrice: number
) {
  return Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
}

/**
 * Truncate long text.
 */
export function truncate(text: string, maxLength = 80) {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength) + "...";
}