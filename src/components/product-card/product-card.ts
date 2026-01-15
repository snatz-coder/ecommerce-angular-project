import { Component, computed, inject, input, output } from '@angular/core';
import { Product } from '../../model/product.model';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  addToCartClicked = output<Product>();

  store = inject(EcommerceStore);

  isInWishList = computed(() => this.store.wishListItems().find((p) => p.id === this.product().id));

  toggleWishlist(product: Product) {
    if (!this.isInWishList()) {
      this.store.addToWishList(product);
    } else {
      this.store.removeFromWishList(product);
    }
  }
}
