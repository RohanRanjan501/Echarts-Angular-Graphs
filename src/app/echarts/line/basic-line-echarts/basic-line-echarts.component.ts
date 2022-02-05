import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { dataTool, EChartsOption } from 'echarts';
import { EchartService } from 'src/app/common/service/echart.service';
import { BasicEchartLineModel } from 'src/app/common/model/echart.model';

@Component({
  selector: 'app-basic-line-echarts',
  templateUrl: 'basic-line-echarts.component.html',
  styleUrls: ['basic-line-echarts.component.scss']
})
export class BasicLineEchartsComponent implements OnInit, OnDestroy {

  _chartOption: EChartsOption;
   subscription: Subscription; 
   isDarkMode: boolean = false;
  _theme: string;
  
  constructor(private echartService: EchartService) { }
  
  
  
  ngOnInit(): void {
  
   this.subscription = this.echartService.getbasicLineEchartData().subscribe(data => {
  
   this._initBasicLineEchart(data);
  
   });
  
  
  
 }
  
  
  
   ngOnDestroy() {
  
    if (this.subscription) {
  
     this.subscription.unsubscribe();
  
    }
  
   }
  
  
  
 private _initBasicLineEchart(chartData: BasicEchartLineModel[]) {
  
  
  
 this._theme = this.isDarkMode ? 'dark' : '';
  
  
  
 this._chartOption = {
   tooltip: {

   trigger:'axis',
   show: true
  
   },
   grid:{
     left:'5%',
     right: '15%',
     bottom:'10%'
   },
   title:{
     text:'LINE CHART',
     left:'1%'
   },
  
   // background: 'transparent',
  
   xAxis: {
  
   type: 'category',
  
   data: chartData.map(m => ({
  
   value: m.name
  
   }))
  
   },
  
   yAxis: {
  
   type: 'value'
  
   },
  toolbox:{
    right:10,
    feature:{
      dataZoom:{
        yAxisIndex:'none'
      },
      restore:{},
      saveAsImage:{},
    }
  },

  dataZoom:[
    {
      startValue: 'Friday'
    },
    {
      type:'inside'
    }
  ],

  visualMap:{
    top:50,
    right:10,
    pieces:[
      {
        gt:0,
        lte:2000,
        color: '#93CE07'
      },
      {
        gt:2000,
        lte:4000,
        color: '#FBDB0F'
      },
      {
        gt:4000,
        lte:6000,
        color: '#FC7D02'
      },
      {
        gt:6000,
        lte:8000,
        color:'#FD0100'
      },
      {
        gt:8000,
        lte:10000,
        color:'#AC3B2A'
      }
      
    ]
  },

  
   series: [{
  
   data: chartData.map(m => ({
  
   value: m.value
  
   })),

   markLine:{
     silent:true,
     lineStyle:{
       color:'#333'
     }
   },

  
 
   type: 'line'
   
  
   }]
  
   };
  
   }
}


