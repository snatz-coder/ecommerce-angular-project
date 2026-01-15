import { Component, computed, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';
import { ProductCard } from '../../components/product-card/product-card';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EmptyWishlist } from '../empty-wishlist/empty-wishlist';

@Component({
  selector: 'app-my-wish-list',
  imports: [BackButton, ProductCard, MatButton, MatIcon, MatIconButton, EmptyWishlist],
  templateUrl: './my-wish-list.html',
  styleUrl: './my-wish-list.scss',
})
export default class MyWishList {
  store = inject(EcommerceStore);
}
