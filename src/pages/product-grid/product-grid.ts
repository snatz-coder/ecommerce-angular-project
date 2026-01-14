import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav'
import { MatNavList, MatListItem } from '@angular/material/list'
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';
@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, RouterLink, TitleCasePipe],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})
export default class ProductGrid {
  category = input<string>('all');

  store = inject(EcommerceStore);

  constructor(){
   this.store.setCategory(this.category)
  }

  products = signal<Product[]>([
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
  ]);

 

  categories = signal<string[]>(['all','bags', 'accessories', 'computers', 'electronics'])

  addToCart(product:Product){

  }
}
