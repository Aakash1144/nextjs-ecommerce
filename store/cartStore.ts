import { create } from "zustand";
import { Product } from "@/types/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),

  totalItems: () =>
    get().items.reduce(
      (total, item) => total + item.quantity,
      0
    ),

  subtotal: () =>
    get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
}));