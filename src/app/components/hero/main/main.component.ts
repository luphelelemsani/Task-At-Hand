import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../../models/products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() product!: Products;
  constructor() {}

  ngOnInit(): void {}
}
