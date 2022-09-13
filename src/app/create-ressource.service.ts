import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRessourceService {


  private baseUrl = 'http://localhost:8085/registerressource';
  constructor(private http: HttpClient) { }

  createUser(ressource: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, ressource);
  }
}
