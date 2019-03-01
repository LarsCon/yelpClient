import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Food } from '../models/food.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private psUrl = 'http://localhost:3333/restaurant';

  constructor(private http: HttpClient) { }

  getRestaurant(): Observable<Food[]> {
    return this.http.get<Food[]>(this.psUrl);
  }

  makeSearch(searchParams: Food) : Observable<Food[]> {
    let params = new HttpParams().set("price", searchParams.price).set("state", searchParams.state);
    return this.http.get<Food[]>(this.psUrl, {params, ...httpOptions});
  }

}