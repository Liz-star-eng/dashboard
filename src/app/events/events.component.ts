import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

interface CustomCalendarOptions extends CalendarOptions {
  dateClick?: (arg: { dateStr: string }) => void;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  title: string = 'Upcoming Events'
  calendarOptions: CustomCalendarOptions = {
    initialView: 'dayGridMonth',
     plugins: [dayGridPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'General meeting', date: '2023-10-11', color: 'rgb(4, 67, 66)' },
      { title: 'Departments review', date: '2023-10-06', color: 'rgb(4, 67, 66)' },
      { title: 'Company outing', date: '2023-10-07', color: 'rgb(105, 32, 251)' },
      { title: 'Deadline for all projects', date: '2023-10-09', color: ' rgb(126, 5, 5)' },
      { title: 'public Holiday', date: '2023-10-23', color: 'rgb(237, 158, 32)' },
      { title: 'End of Month meeting', date: '2023-10-27', color: 'rgb(4, 67, 66)' }
     ]
    
  };

  handleDateClick(arg: { dateStr: string }) {
    alert('date click! ' + arg.dateStr);
  }
}

