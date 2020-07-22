import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Frame'},
    { id: 2, name: 'Fork'},
    { id: 3, name: 'Headset'},
    { id: 4, name: 'Shifter'},
    { id: 5, name: 'Cassette'}
  ];

  constructor() { }

  get Categories(): Category[] {
    return this.categories;
  }
}