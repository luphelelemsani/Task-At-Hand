import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Products;

  addProduct(product: Products) {
    this.productService.addProduct(product);
    window.alert('The product has been added!');
  }

  constructor(private productService: ProductsService) {}

  ngOnInit() {}
}
