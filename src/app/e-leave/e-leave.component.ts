import { Component } from '@angular/core';

@Component({
  selector: 'app-e-leave',
  templateUrl: './e-leave.component.html',
  styleUrls: ['./e-leave.component.scss']
})
export class ELeaveComponent {
title: string = "Workers on Leave"
employees: Array<any>= [
  {
   name: 'Gilbert Doe',
   Department: 'HR',
    status: 'Approved'
  },
    {
   name: 'Suzzy Williams',
   Department: 'IT',
   status: 'Declined'
  },  
  {
   name: 'Becca Arkurst',
   Department: 'Operations',
  status: 'Approved'
  },  
  {
   name: 'Vera Samuel',
   Department: 'Sales',
    status: 'Approved'
  },  {
   name: 'John Simmons',
   Department: 'Finance',
    status: 'Declined'
  },  
  
  {
   name: 'Marian Simps',
   Department: 'Marketing',
   status: 'Approved'
  },
   {
   name: 'Robert Simpson',
   Department: 'Finance',
   status: 'Declined'
  },
   {
   name: 'John Doe',
   Department: 'IT',
    status: 'Declined'
  },
   {
   name: 'Lawrence Tetteh',
   Department: 'HR',
   status: 'Approved'
  },
     {
   name: 'Regina Daniels',
   Department: 'Sales',
   status: 'Approved'
  },
]
}
