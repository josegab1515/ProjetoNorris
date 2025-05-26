import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) { }

  getDados(){
    return this.http.get(`https://api.chucknorris.io/jokes/random`)
  }

}
