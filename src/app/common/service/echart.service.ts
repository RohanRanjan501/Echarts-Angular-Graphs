import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {BasicEchartLineModel} from 'src/app/common/model/echart.model';

@Injectable()
export class EchartService {
  constructor(private httpClient: HttpClient) { }

  getbasicLineEchartData() :Observable<BasicEchartLineModel[]>{
    return this.httpClient.get<BasicEchartLineModel[]>('assets/echart/basic-line-chart-data.json');
  }
  }