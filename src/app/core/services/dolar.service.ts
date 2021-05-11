import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dolar } from 'src/app/shared/models/dolar';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) { }
  URL = 'https://economia.awesomeapi.com.br/USD-BRL/'

  getDolarAtual(): Observable<Dolar>{
    return this.http.get<Dolar>(this.URL);
  }
}
