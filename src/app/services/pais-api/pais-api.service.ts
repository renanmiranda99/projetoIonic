import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisApiService {
  private apiUrl = 'https://restcountries.com/v3.1/all'; 

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCountryById(id: string): Observable<any> {
    return this.getAllCountries().pipe(
      map((countries: any[]) => countries.find(country => country.cca3 === id)) 
    );
  }
}
