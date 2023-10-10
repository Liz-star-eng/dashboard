import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
// import { ELeaveComponent } from './e-leave/e-leave.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { StatisticcsComponent } from './statisticcs/statisticcs.component';
import { MainComponent } from './main/main.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
     {
    path: "",
    component: MainComponent
  },
    {
    path: "employees",
    component: EmployeesComponent
  },
      {
    path: "projects",
    component: ProjectsComponent
  },
      {
    path: "departments",
    component:  DepartmentsComponent
  },
  {
    path: "events",
    component:EventsComponent
  },
    {
    path: "statistics",
    component: StatisticcsComponent
  },
    {
    path: "events",
    component:EventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
