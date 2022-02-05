import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import {  MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { EchartService } from './common/service/echart.service';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BasicLineEchartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
    CommonModule
  ],
  providers: [EchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
