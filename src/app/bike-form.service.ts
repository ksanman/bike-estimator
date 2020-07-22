import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CategoryService } from './category.service';

@Injectable()
export class BikeFormService {
  private bikeForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
    ) { 
    this.bikeForm = this.fb.group({
      name: ['', Validators.required],
      calculatePrice: [false],
      calculateWeight: [false],
      price: [''],
      weight: [''],
      parts: this.fb.array([])
    });

    for(let category of categoryService.Categories) {
      this.parts.push(this.fb.group({
        category: [category],
        name: ['', Validators.required],
        price: [''],
        weight: ['']
      }));
    }
  }

  get form() {
    return this.bikeForm;
  }

  get name() {
    return this.bikeForm.get('name');
  }

  get calculatePrice() {
    return this.bikeForm.get('calculatePrice');
  }

  get calculateWeight() {
    return this.bikeForm.get('calculateWeight');
  }

  get parts() {
    return this.bikeForm.get('parts') as FormArray;
  }

  get rawData(): string {
    return this.bikeForm.getRawValue();
  }

  addPart() {
    this.parts.push(this.fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      price: [''],
      weight: ['']
    }));
  }
}