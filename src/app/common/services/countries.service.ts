import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountryInterface } from '../models/country-interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  getCountries(): Observable<CountryInterface[]> {
    return (
      this.http
      .get<CountryInterface[]>('https://restcountries.com/v2/all')
      .pipe(
        map((countries: CountryInterface[]) => {
        return countries
      }),
    )
    ) 
  }


  constructor(private http: HttpClient) {}
}
