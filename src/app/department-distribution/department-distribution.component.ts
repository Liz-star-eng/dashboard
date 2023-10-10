import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-department-distribution',
  templateUrl: './department-distribution.component.html',
  styleUrls: ['./department-distribution.component.scss']
})
export class DepartmentDistributionComponent {

  chart = new Chart({
chart: {
  type: 'bar',
  height: 350,
  inverted: true
},
title: {
  text: 'Department Distribution'
},
xAxis: {
categories: [
  'HR',
  'Marketing',
  'Sales',
  'Finance',
  'Operations',
  'Engineering',
  'IT',
  'Customer care',
],
      title: {
        text: 'Deparments'
      }
},
yAxis: {
title: {
  text: 'number of workerd'
},
labels: {
  enabled: true
}
},
series: [
    {
    name: 'number of workers',
    type: 'bar',
    color: '#044342',
    data: [5, 15, 30, 10, 15, 20, 12, 15]
  }
],
credits: {
  enabled: false
}
})
}
