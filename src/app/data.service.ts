import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { FixtureStat } from './models/fixtureStat.model';
import { Fixture } from './models/fixture.model';

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

  getFixtures = (league: number, date: string) => {
    const url = this.apiUrl + '/fixtures';
    const season = '2020';
    return this.http.get<{response: Array<Fixture>}>(url, {
      headers: {
        'x-rapidapi-host': this.apiHost,
        'x-rapidapi-key': this.apiKey
      },
      params: {
        league: league.toString(),
        season,
        date
      }
    });
  }

  getStats = (fixture: number, team: number) => {
    const url = this.apiUrl + '/fixtures/statistics';
    return this.http.get<{ response: Array<FixtureStat> }>(url, {
      headers: {
        'x-rapidapi-host': this.apiHost,
        'x-rapidapi-key': this.apiKey
      },
      params: {
        fixture: fixture.toString(),
        team: team.toString()
      }
    });
  }


}
