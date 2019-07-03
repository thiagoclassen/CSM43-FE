import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  path = 'http://localhost:3000/restaurants/';

  user_path = 'http://localhost:3000/users/2fe50d3a-bf6c-4283-a4b9-a49b628f21c3/restaurants/';

  constructor(private http: HttpClient) { }

  listRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.path);
  }

  getRestautant(id): Observable<any> {
    console.log('called id:', id)
    return this.http.get<any>(this.path + id);
  }

  createRestaurant(restaurant: any): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJkZTVmMTM1LTAyYzEtNGNlMS1hMWFjLTZlNTBkYzRhZjZhZiIsIm5hbWUiOiJhZG1pbiIsImxvZ2luVHlwZSI6InBhc3N3b3JkIiwicGVybWlzc2lvbkxldmVsIjo5OSwiaWF0IjoxNTYyMTUyNTA0LCJleHAiOjE1NjIxNTYxMDR9.f86fk65X_k1A4B6chyxKd3UcQV2cjiJ9ts8Z9TMriTI');
    return this.http.post(this.user_path, restaurant, {headers});
  }

}
