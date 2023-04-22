import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Traveller } from "../models/traveller.model";
import { AddTraveller } from "../models/addTraveller.model";

@Injectable({
  providedIn: 'root'
})
export class TravellersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllTravellers(): Observable<Traveller[]> {
    return this.http.get<Traveller[]>(this.baseApiUrl + "api/Traveller");
  }

  getTraveller(id: string): Observable<Traveller> {
    return this.http.get<Traveller>(this.baseApiUrl + "api/Traveller/" + id);
  }

  createTraveller(addTravellerRequest: AddTraveller): Observable<AddTraveller> {
    return this.http.post<AddTraveller>(this.baseApiUrl + "api/Traveller", addTravellerRequest);
  }

  updateTraveller(id: string, updateTravellerRequest: AddTraveller): Observable<Traveller> {
    return this.http.put<Traveller>(this.baseApiUrl + "api/Traveller/" + id, updateTravellerRequest);
  }

  deleteTraveller(id: string): Observable<Traveller> {
    return this.http.delete<Traveller>(this.baseApiUrl + "/api/Traveller/" + id);
  }
}
