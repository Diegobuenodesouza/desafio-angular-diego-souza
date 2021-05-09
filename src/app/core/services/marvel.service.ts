import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  ts: string = '1620509379'
  apiKey: string = '6d9f316d9279f83791e946cd7d6ef954'
  md5: string = '671a1552eba050782f1f577ea24720bd'  

  URL = "http://gateway.marvel.com/v1/public/"
  constructor(private http : HttpClient) { }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>(`${this.URL}/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.md5}&limit=100`)
  }

  getCharacter(id: number): Observable<any>{
    return this.http.get<any[]>(`${this.URL}/characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.md5}`)
  }
}
