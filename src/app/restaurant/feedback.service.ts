import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseURL = 'http://localhost:3000/';

  constructor( private http: HttpClient ) { }

  getAllData() {
    return this.http.get(this.baseURL + 'restaurants', { responseType: 'json' });
  }

}
