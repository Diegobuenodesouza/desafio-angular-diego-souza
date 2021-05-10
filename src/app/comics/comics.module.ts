import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsRoutingModule } from './comics-routing.module';

import { ComicsInfoComponent } from './comics-info/comics-info.component';


@NgModule({
  declarations: [
    ComicsInfoComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ],
  exports: [
    ComicsInfoComponent
  ]
})
export class ComicsModule { }
