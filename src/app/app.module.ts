import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BikeBuildEstimatorComponent } from './bike-build-estimator/bike-build-estimator.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BikeFormService } from './bike-form.service';
import { CategoryService } from './category.service';
import { BuildHeaderComponent } from './build-header/build-header.component';
import { BikeBuildPartsComponent } from './bike-build-parts/bike-build-parts.component';
import { BikeBuildPartComponent } from './bike-build-part/bike-build-part.component';
import { PartService } from './part.service';
import { PartPickerComponent } from './part-picker/part-picker.component';
import { AddPartComponent } from './add-part/add-part.component';

const options: Partial<IConfig> = {};

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, ReactiveFormsModule, NgxMaskModule.forRoot() ],
  declarations: [ AppComponent, BikeBuildEstimatorComponent, BuildHeaderComponent, BikeBuildPartsComponent, BikeBuildPartComponent, PartPickerComponent, AddPartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CategoryService, PartService]
})
export class AppModule { }
