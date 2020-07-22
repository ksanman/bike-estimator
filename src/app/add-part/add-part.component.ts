import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../category';
import { Part } from '../part';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {
  @Input() category: Category;
  @Input() modal: any;
  @Output() partAdded: EventEmitter<Part> = new EventEmitter<Part>();

  partForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  get name() {
    return this.partForm.get('name');
  }

  get price() {
    return this.partForm.get('price');
  }

  get weight() {
    return this.partForm.get('weight');
  }

  ngOnInit() {
    this.partForm = this.fb.group({
      category: [this.category],
      name: ['', Validators.required],
      price: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  addPart(): void {
    if (this.partForm.invalid) {
      return;
    }

    const part: Part = {
      id: 0,
      category: this.category,
      name: this.name.value,
      price: this.price.value,
      weight: this.weight.value,
    };

    this.partAdded.emit(part);
    this.modal.close();
  }
}