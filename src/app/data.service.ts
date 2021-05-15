import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = environment.apiUrl;
  apiHost = environment.apiHost;
  apiKey = environment.apiKey;

  laLigaId = 140;
  eplId = 39;
  serieAId = 135;
  bundesligaId = 78;
  league1Id = 61;

  constructor(private http: HttpClient) { }

  getFixtures = (league: string, date: string) => {
    console.log(this.apiHost, this.apiKey);
    const url = this.apiUrl + '/fixtures';
    return this.http.get<{response: Array<any>}>(url, {
      headers: {
        'x-rapidapi-host': this.apiHost,
        'x-rapidapi-key': this.apiKey
      },
      params: {
        league,
        season: '2020',
        date
      }
    });
  }


}
