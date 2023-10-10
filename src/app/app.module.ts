import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { EmployeesComponent } from './employees/employees.component';
import { ELeaveComponent } from './e-leave/e-leave.component';
import { StaffOnLeaveComponent } from './staff-on-leave/staff-on-leave.component';
import { ActiveStaffComponent } from './active-staff/active-staff.component';
import { TotalStaffComponent } from './total-staff/total-staff.component';
import { EventsComponent } from './events/events.component';
import { GenderComponent } from './gender/gender.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { ChartModule } from 'angular-highcharts';
import { DepartmentDistributionComponent } from './department-distribution/department-distribution.component';
import { StatisticcsComponent } from './statisticcs/statisticcs.component';
import { ProjectsComponent } from './projects/projects.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPopupComponent } from './add-popup/add-popup.component';
import { TaskComponent } from './task/task.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SideBarComponent,
        MainComponent,
        WidgetsComponent,
        EmployeesComponent,
        ELeaveComponent,
        StaffOnLeaveComponent,
        ActiveStaffComponent,
        TotalStaffComponent,
        EventsComponent,
        GenderComponent,
        DepartmentDistributionComponent,
        StatisticcsComponent,
        ProjectsComponent,
        DepartmentsComponent,
        LoginFormComponent,
        AddPopupComponent,
        TaskComponent,
    ],
    providers: [
        HttpClient
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        ChartModule,
        FullCalendarModule,
        FormsModule,
        MatDialogModule
    ]
})
export class AppModule { }
