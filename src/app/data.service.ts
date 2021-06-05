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

  laLigaID = 140;
  eplID = 39;
  serieAID = 135;
  bundesligaID = 78;
  league1ID = 61;
  euroID = 4;

  constructor(private http: HttpClient) { }

  getFixtures = (league: string, date: string) => {
    const url = this.apiUrl + '/fixtures';
    const season = '2020';
    return this.http.get<{response: Array<any>}>(url, {
      headers: {
        'x-rapidapi-host': this.apiHost,
        'x-rapidapi-key': this.apiKey
      },
      params: {
        league,
        season,
        date
      }
    });
  }


}
