import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../../ecommerce-store';
import { ViewPanel } from '../../../directives/view-panel';
import { ShowCartItems } from '../show-cart-items/show-cart-items';

@Component({
  selector: 'app-list-cart-items',
  imports: [ViewPanel, ShowCartItems],
  templateUrl: './list-cart-items.html',
  styleUrl: './list-cart-items.scss',
})
export class ListCartItems {
 store = inject(EcommerceStore)
}
