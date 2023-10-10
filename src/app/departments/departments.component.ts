import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
     plugins: [dayGridPlugin],
    }

    constructor( private dialogRef: MatDialog ){

    }
      openPopup(){
  this.dialogRef.open(TaskComponent)
}

}
