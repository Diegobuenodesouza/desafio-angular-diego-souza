import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private URL = 'http://gateway.marvel.com/v1/public/';
  private ts = '1620509379';
  private apiKey = '6d9f316d9279f83791e946cd7d6ef954';
  private md5 = '671a1552eba050782f1f577ea24720bd';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>(`${this.URL}/characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.md5}&limit=100`)
    .pipe(map((data: any) => data.data.results));
  }

  getCharacter(id: number): Observable<any>{
    return this.http.get<any>(`${this.URL}/characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.md5}`)
    .pipe(map((data: any) => data.data.results));
  }


  getComicsCharacterById(id: number): Observable<any>{
    return this.http.get<any[]>(`${this.URL}/characters/${id}/comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.md5}&limit=100`)
    .pipe(map((data: any) => data.data.results));
  }

}
