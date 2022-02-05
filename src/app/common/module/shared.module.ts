import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatCheckbox,
    FlexLayoutModule,
    NgxWebstorageModule.forRoot({ prefix: 'ECHARTS|' })
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckbox,
    FlexLayoutModule,
    NgxWebstorageModule
  ]
})
export class SharedModule { }