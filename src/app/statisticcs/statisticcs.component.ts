import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-statisticcs',
  templateUrl: './statisticcs.component.html',
  styleUrls: ['./statisticcs.component.scss']
})
export class StatisticcsComponent {
 chart = new Chart({
chart: {
  type: 'spline',
  height: 270,
  width: 700,
},
title: {
  text: 'Salary Performance'
},
  plotOptions: {
    series: {
      lineWidth: 1.5 
    }
  },
xAxis: {
categories: [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug'
]
},
yAxis: {
title: {
  text: 'Monthly'
}
},
series: [
    {
    name: '2023',
    type: 'spline',
     color: '#044342',
    data: [2000,4000, 5000,7000,10000,15000, 20000,25000]
  },
      {
    name: '2022',
    type: 'spline',
     color: '#7E0505',
    data: [1500,3000,3500,5000,7000,10000, 10000,20000]
  },
      {
    name: '2021',
    type: 'spline',
     color: '#6920fb',
    data: [1000,2000,3000,4000,5500,7000, 8000,12000]
  }
],
credits: {
  enabled: false
}
})
}
