import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../models/food.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Bearer' : 'CpQ2MEVOgTTfTrdta8hUi_RiCXI0cTzeUuiri__M4gczA6cN5S2J77R27GMdm4Rlnw-zouCMY6j5lJAtBeh2cTFZHKlD1FXpDepgXufyNKrYAOZ-V659EGXkvU53XHYx' })
};

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private psUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  getRestaurant(): Observable<Food[]> {
    return this.http.get<Food[]>(this.psUrl);
  }

}