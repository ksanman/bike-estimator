import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BikeFormService } from '../bike-form.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { MaskPipe } from 'ngx-mask';

type Category = {id: number, name: string};

const categories: Category[] = [
  {id: 1, name: 'Frame'},
  {id: 2, name: 'Fork'},
  {id: 3, name: 'Headset'},
  {id: 4, name: 'Shifter'},
  {id: 5, name: 'Cassette'},
  {id: 6, name: 'Crankarms'},
  {id: 7, name: 'Chainring'},
  {id: 8, name: 'Chain'},
  {id: 9, name: 'Bottom Bracket'},
  {id: 10, name: 'Rear Derailluer'}
]

@Component({
  selector: 'app-bike-build-estimator',
  templateUrl: './bike-build-estimator.component.html',
  styleUrls: ['./bike-build-estimator.component.css'],
  providers: [BikeFormService, MaskPipe]
})
export class BikeBuildEstimatorComponent implements OnInit {

  isSubmitted = false;
  

  constructor(
    public bikeFormService: BikeFormService,
    private fb: FormBuilder,
    private maskPipe: MaskPipe
    ) { }

  ngOnInit() {

  }

  formatter = (category: Category) => category.name;

  categorySearch = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length > 0),
    map(term => categories.filter(category => new RegExp(term, 'mi').test(category.name)).slice(0,10))
  )

  onSubmit(): void {

  }

  getPrice(): string {
    let price: number = 0.0;
    for (let partControl of this.bikeFormService.parts.controls) {
      const cost = partControl.get('price').value;
      price += Number(cost.replace('$','').replace(',',''));
    }
    return '$' + this.maskPipe.transform(price, 'separator.2', ',');
  }

  getWeight(): string {
    let weight: number = 0.0;
    for (let partControl of this.bikeFormService.parts.controls) {
      const cost = partControl.get('weight').value;
      weight += Number(cost.replace(',',''));
    }
    return this.maskPipe.transform(weight, 'separator.2', ',');
  }

  getPartWeight(i): string {
    const control = this.bikeFormService.parts.controls[i];
    const value = control.get('weight').value;
    return value ? this.maskPipe.transform(value, 'separator.2', ',') : '0.00';
  }

  getPartPrice(i): string {
    const control = this.bikeFormService.parts.controls[i];
    const value = control.get('price').value;
    return value ? '$' + this.maskPipe.transform(value, 'separator.2', ',') : '$0.00';
  }
}