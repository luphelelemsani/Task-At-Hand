import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Products;
  constructor() {}

  ngOnInit() {}
}
