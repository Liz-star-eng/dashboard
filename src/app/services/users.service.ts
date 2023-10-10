import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   private baseUrl: string = 'https://fakestoreapi.com/'

  constructor( private http: HttpClient) { }

  getAllUsersWithLimit(limit: number = 15):Observable<object> {
  const usersUrl = `${this.baseUrl}users?limit=${limit}`;
  return this.http.get<any>(usersUrl)
}
  getData(searchTerm: string): Observable<any[]> {
    const url = `${this.baseUrl}?search=${searchTerm}`;
    return this.http.get<any[]>(url);
  }
}
