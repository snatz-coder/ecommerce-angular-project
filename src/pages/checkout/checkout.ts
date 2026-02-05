import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { ShippingForm } from './shipping-form/shipping-form';
import { PaymentForm } from './payment-form/payment-form';
import { SummariseOrder } from '../../components/summarise-order/summarise-order';
import { MatButton } from '@angular/material/button';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-checkout',
  imports: [BackButton, ShippingForm, PaymentForm, SummariseOrder, MatButton],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export default class Checkout {
 store = inject(EcommerceStore);
}
