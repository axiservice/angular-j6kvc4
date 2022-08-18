import { Component } from '@angular/core';
import { products_list, Product } from '../productsM1';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products_AAA = products_list;
  products_BBB = ["1","2",this.products_AAA];

  x1 = this.products_BBB[2];
  xxx_type = typeof(<Product> this.products_BBB[2][1]);
  xxx = (<Product> this.products_BBB[2][1]).name;

  

  share() {
    window.alert('The product has been shared!');
  }

  onNotify_1(agreed: any) {
    window.alert('Price '+agreed.price+" - "+agreed.description);
  }

  onNotify_2(pxc: Product) {
    pxc.description = "CIAO";
    pxc.price += 1;
    window.alert('description: '+pxc.description);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/