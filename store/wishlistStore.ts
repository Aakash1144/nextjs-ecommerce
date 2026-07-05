import { create } from "zustand";
import { Product } from "@/types/products";

interface WishlistState {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],

  addToWishlist: (product) => {
    const exists = get().items.find((item) => item.id === product.id);
    if (exists) return;

    set((state) => ({
      items: [...state.items, product],
    }));
  },

  removeFromWishlist: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  isInWishlist: (id) => {
    return get().items.some((item) => item.id === id);
  },
}));