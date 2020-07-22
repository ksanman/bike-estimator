import { Component, OnInit } from '@angular/core';
import { BikeFormService } from '../bike-form.service';

@Component({
  selector: 'app-bike-build-parts',
  templateUrl: './bike-build-parts.component.html',
  styleUrls: ['./bike-build-parts.component.css']
})
export class BikeBuildPartsComponent implements OnInit {
  
  constructor(
    public bikeFormService: BikeFormService
  ) { }

  ngOnInit() {
  }

}