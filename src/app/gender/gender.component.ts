import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent {
  chart = new Chart({
chart: {
  type: 'pie',
  height: 350
},
title: {
  text: 'Gender share'
},
xAxis: {
categories: [
    'Female',
    'Male'
]
},
yAxis: {
title: {
  text: 'Gender'
}
},
series: [
    {
    type: 'pie',
    data: [{
      name: 'Female',
      y: 40,
      color: '#044342'
    },
    {
      name: 'Male',
      y: 55,
      color: '#ed9e20'
    }
  ]
  }
],
credits: {
  enabled: false
}
})
}
