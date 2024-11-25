import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getListaPaises() {
    return this.http.get('https://restcountries.com/v3.1/all')
  }

  getPaisporId(id: any){
    return this.http.get('https://restcountries.com/v3.1/alpha/' + id)
  }
}
