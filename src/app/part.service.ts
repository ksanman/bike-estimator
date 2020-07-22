import { Injectable } from '@angular/core';
import { Part } from './part';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class PartService {
  private parts: Part[] = [
    {id: 0, category: { id: 1, name: 'Frame'}, name: 'Santa Cruz Blur', price: '$2999.99', weight: '2700'}
  ];

  private partsSubject: BehaviorSubject<Part[]> = new BehaviorSubject<Part[]>([]);

  constructor() {
    this.updateSubject();
   }

  parts$: Observable<Part[]> = this.partsSubject.asObservable();

  addPart(part: Part): void {
    part.id = this.parts.length > 0 ? Math.max(...this.parts.map(p => p.id)) + 1 : 1;
    this.parts.push(part);
    this.updateSubject();
  }

  updateSubject(): void {
    this.partsSubject.next(this.parts.map(p => Object.assign({}, p)));
  }
}