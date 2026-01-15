import { computed, inject } from '@angular/core';
import { Product } from './model/product.model';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';
import { Toaster } from './service/toaster';
import { CartItem } from './model/cart.model';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishListItems: Product[];
  cartItems: CartItem[];
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: [
      {
        id: 'p-001',
        name: 'Wireless Headphones',
        description: 'Noise-cancelling over-ear wireless headphones with 30h battery life.',
        price: 199.99,
        imageUrl: 'https://picsum.photos/seed/headphones/400/300',
        inStock: true,
        reviewCount: 124,
        category: 'electronics',
      },
      {
        id: 'p-002',
        name: 'Smart Watch',
        description: 'Water-resistant smartwatch with heart-rate and sleep tracking.',
        price: 149.99,
        imageUrl: 'https://picsum.photos/seed/smartwatch/400/300',
        inStock: true,
        reviewCount: 89,
        category: 'electronics',
      },
      {
        id: 'p-003',
        name: 'Mechanical Keyboard',
        description: 'RGB mechanical keyboard with hot-swappable switches.',
        price: 129.99,
        imageUrl: 'https://picsum.photos/seed/keyboard/400/300',
        inStock: false,
        reviewCount: 56,
        category: 'accessories',
      },
      {
        id: 'p-004',
        name: 'Gaming Mouse',
        description: 'High-precision gaming mouse with adjustable DPI.',
        price: 59.99,
        imageUrl: 'https://picsum.photos/seed/mouse/400/300',
        inStock: true,
        reviewCount: 203,
        category: 'accessories',
      },
      {
        id: 'p-005',
        name: 'Laptop Backpack',
        description: 'Durable backpack with padded laptop compartment.',
        price: 79.99,
        imageUrl: 'https://picsum.photos/seed/backpack/400/300',
        inStock: true,
        reviewCount: 41,
        category: 'bags',
      },
      {
        id: 'p-006',
        name: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with deep bass and 12h playtime.',
        price: 99.99,
        imageUrl: 'https://picsum.photos/seed/speaker/400/300',
        inStock: false,
        reviewCount: 67,
        category: 'electronics',
      },
      {
        id: 'p-007',
        name: '4K Monitor',
        description: '27-inch 4K UHD monitor with ultra-thin bezels.',
        price: 399.99,
        imageUrl: 'https://picsum.photos/seed/monitor/400/300',
        inStock: true,
        reviewCount: 32,
        category: 'computers',
      },
      {
        id: 'p-008',
        name: 'USB-C Hub',
        description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.',
        price: 49.99,
        imageUrl: 'https://picsum.photos/seed/hub/400/300',
        inStock: true,
        reviewCount: 110,
        category: 'accessories',
      },
    ],
    category: 'all',
    wishListItems: [],
    cartItems: [],
  } as unknown as EcommerceState),
  withComputed(({ products, category, wishListItems, cartItems }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') return products();
      return products().filter((p) => p.category === category().toLowerCase());
    }),
    wishListCount: computed(() => {
      return wishListItems().length;
    }),
    addToCartCount: computed(() => {
      return cartItems().reduce((acc,item) => acc + item.quantity, 0);
    }),
  })),
  withMethods((store, toast = inject(Toaster)) => ({
    setCategory: signalMethod<string>((category) => {
      patchState(store, { category });
    }),
    addToWishList: signalMethod<Product>((product: Product) => {
      const updatedWishList = produce(store.wishListItems(), (draft) => {
        if (!draft.find((p) => p.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { wishListItems: updatedWishList });
      toast.success('Product successfully added to the Wish list');
    }),
    removeFromWishList: signalMethod<Product>((product: Product) => {
      //const updatedWishList = store.wishListItems().filter(p => p.id !== product.id)
      const updatedWishList = produce(store.wishListItems(), (draft) => {
        const index = draft.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      });
      patchState(store, { wishListItems: updatedWishList });
      toast.success('Product successfully removed from the Wish list');
    }),
    clearWishlist: () => {
      patchState(store, { wishListItems: [] });
    },
    addToCart: (product: Product, quantity: number) => {
      const existingItemIndex = store.cartItems().findIndex((i) => i.product.id === product.id);

      const updateCartItem = produce(store.cartItems(), (draft: CartItem[]) => {
        if (existingItemIndex !== -1) {
          draft[existingItemIndex].quantity += quantity;
        } else {
          draft.push({product, quantity});
        }
      });
      patchState(store, { cartItems: updateCartItem });
      toast.success('Product added to the cart successfuly')
    },
  }))
);
