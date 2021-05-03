import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  products: Products[] = [];
  constructor(private res: RestService) {}

  ngOnInit(): void {
    this.res.fetchProducts().subscribe((response) => {
      this.products = response;
    });
  }
}
