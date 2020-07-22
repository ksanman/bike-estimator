import { Component, OnInit } from '@angular/core';
import { BikeFormService } from '../bike-form.service';
import { MaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-build-header',
  templateUrl: './build-header.component.html',
  styleUrls: ['./build-header.component.css']
})
export class BuildHeaderComponent implements OnInit {

  constructor(
    public bikeFormService: BikeFormService,
    public maskPipe: MaskPipe
    ) { }

  ngOnInit() {
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

}