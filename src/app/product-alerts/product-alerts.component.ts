import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../productsM1';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product_rx: Product|undefined;
  @Output() notify123 = new EventEmitter<any>();
  @Output() notify456 = new EventEmitter<any>();
}