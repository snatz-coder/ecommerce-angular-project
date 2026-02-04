import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../directives/view-panel';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-summarise-order',
  imports: [ViewPanel],
  templateUrl: './summarise-order.html',
  styleUrl: './summarise-order.scss',
})
export class SummariseOrder {

  store = inject(EcommerceStore);

  subTotal = computed(() => {
    let total = 0;
    for(let i = 0; i < this.store.cartItems().length; i++){
      let item = this.store.cartItems()[i];
      total += Math.round(item.product.price * item.quantity)
    }
    return total;
  })
  tax = computed(() => {
    return Math.round(0.05*100)
  })
  total = computed(() => {
    return this.subTotal() + this.tax()
  })
}
