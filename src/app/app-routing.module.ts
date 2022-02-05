import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';

const routes: Routes = [
    {
        path: 'basic-line-echarts',
        component: BasicLineEchartsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }