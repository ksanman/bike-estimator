import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { BikeFormService } from '../bike-form.service';
import { Category } from '../category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartService } from '../part.service';
import { Part } from '../part';

@Component({
  selector: 'app-bike-build-part',
  templateUrl: './bike-build-part.component.html',
  styleUrls: ['./bike-build-part.component.css'],
  providers: [PartService]
})
export class BikeBuildPartComponent implements OnInit {
  @Input() part: AbstractControl;

  get partGroup(): FormGroup {
    return this.part as FormGroup;
  }

  @Input() index: number;

  get category(): Category {
    return this.partGroup.get('category').value;
  }

  constructor(
    public bikeFormService: BikeFormService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    
  }

  getPartPrice(): string {
    return this.part.get('price').value;
  }

  getPartWeight(): string {
    return this.part.get('weight').value;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});
  }

  selectPart(part: Part): void {  
    const nameControl = this.part.get('name');
    const priceControl = this.part.get('price');
    const weightControl = this.part.get('weight');

    nameControl.setValue(part.name);
    priceControl.setValue(part.price);
    weightControl.setValue(part.weight);
  }
}