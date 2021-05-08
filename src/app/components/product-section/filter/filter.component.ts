import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categories: Array<string> = ['food', 'people', 'landmarks'];
  Category = '';

  constructor() {}

  ngOnInit(): void {}
}
