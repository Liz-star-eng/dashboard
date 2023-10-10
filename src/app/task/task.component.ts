import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
name: string = ""
tasks: Array<any> = [
   {name: 'implement search'},
    {name: ''},
   {name: 'buy egg pie'},
  {name: 'buy water'}
]
isAdded: boolean = false
index = 0
}
