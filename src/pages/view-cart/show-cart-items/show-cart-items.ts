import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../model/product.model';
import { CartItem } from '../../../model/cart.model';
import { QtySelector } from '../../../components/qty-selector/qty-selector';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-show-cart-items',
  imports: [QtySelector, MatIcon, MatIconButton],
  templateUrl: './show-cart-items.html',
  styleUrl: './show-cart-items.scss',
})
export class ShowCartItems {
 item = input.required<CartItem>();
 store = inject(EcommerceStore)
 updateCart(q:number){
   
 }
 totalPrice = computed(() => this.item().product.price * this.item().quantity)

}
