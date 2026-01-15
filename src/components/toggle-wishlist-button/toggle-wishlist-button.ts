import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../model/product.model';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-wishlist-button.html',
  styleUrl: './toggle-wishlist-button.scss',
})
export class ToggleWishlistButton {
  icon = input<string>();

  product = input.required<Product>();

  store = inject(EcommerceStore)
  
 isInWishList = computed(() => this.store.wishListItems().find((p) => p.id === this.product().id));

  toggleWishlist(product: Product) {
    if (!this.isInWishList()) {
      this.store.addToWishList(product);
    } else {
      this.store.removeFromWishList(product);
    }
  }
}
