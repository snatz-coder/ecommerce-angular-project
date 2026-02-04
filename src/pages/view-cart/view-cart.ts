import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { SummariseOrder } from '../../components/summarise-order/summarise-order';

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, SummariseOrder],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss',
})
export default class ViewCart {

}
