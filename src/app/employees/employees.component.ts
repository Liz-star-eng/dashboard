import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { user_rep } from '../models/user_rep';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from '../add-popup/add-popup.component';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  
  title: string = 'Employees Details'
  users: user_rep[] = []
  searchValue: string = ''

  constructor(private service: UsersService, private dialogRef: MatDialog) {}
  ngOnInit(): void {
    this.service.getAllUsersWithLimit().subscribe({
      next: (data: any): void => {
        this.users = data.map((x:any)=>({...x, address: 'Cliff-Street', dob:'01/01/1994', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQft76tKg6I5MYlC2liryTZFGrpVQIzSJUTqQ&usqp=CAU'}));
      },
    });  
  }
    // search(): void {
    // this.service.getData(this.searchValue)
    //   .subscribe(data => {
    //     this.users = data;
    //   });
    // }

  openPopup(){
  this.dialogRef.open(AddPopupComponent)
}
}
