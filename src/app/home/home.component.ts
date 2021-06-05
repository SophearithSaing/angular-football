import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FixtureStat } from '../models/fixtureStat.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullDate = new Date();
  selectedDate = `${this.fullDate.getFullYear()}-${this.fullDate.getMonth() < 9 ? '0' + (this.fullDate.getMonth() + 1) : (this.fullDate.getMonth() + 1)}-${this.fullDate.getDate() < 10 ? '0' + (this.fullDate.getDate()) : (this.fullDate.getDate())}`;
  dates: Array<{ month: string; date: string; dateString: string }>;

  plFixtures = [];
  fixtures = {};

  homeStat: FixtureStat;
  awayStat: FixtureStat;

  sampleFixture = {
    fixture: {
      id: 239625,
      referee: null,
      timezone: 'UTC',
      date: '2020-02-06T14:00:00+00:00',
      timestamp: 1580997600,
      periods: {
        first: 1580997600,
        second: null
      },
      venue: {
        id: 1887,
        name: 'Stade Municipal',
        city: 'Oued Zem'
      },
      status: {
        long: 'Halftime',
        short: 'HT',
        elapsed: 45
      }
    },
    league: {
      id: 200,
      name: 'Botola Pro',
      country: 'Morocco',
      logo: 'https://media.api-sports.io/football/leagues/115.png',
      flag: 'https://media.api-sports.io/flags/ma.svg',
      season: 2019,
      round: 'Regular Season - 14'
    },
    teams: {
      home: {
        id: 967,
        name: 'Rapide Oued ZEM',
        logo: 'https://media.api-sports.io/football/teams/967.png',
        winner: false
      },
      away: {
        id: 968,
        name: 'Wydad AC',
        logo: 'https://media.api-sports.io/football/teams/968.png',
        winner: true
      }
    },
    goals: {
      home: 0,
      away: 1
    },
    score: {
      halftime: {
        home: 0,
        away: 1
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  };

  sampleFixtures = [this.sampleFixture, this.sampleFixture, this.sampleFixture, this.sampleFixture, this.sampleFixture];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDates(this.fullDate);
    // this.getHomeStat(605425, 542);
    // this.getAwayStat(605425, 542);
  }

  getDates = (date: Date) => {
    this.dates = [];
    let newDate = new Date(date.setDate(date.getDate() - 1));
    for (let round = 0; round < 10; round++) {
      const dateString = `${newDate.getFullYear()}-${newDate.getMonth() < 9 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1)}-${newDate.getDate() < 10 ? '0' + (newDate.getDate()) : (newDate.getDate())}`;
      const dateobject = {
        month: newDate.toLocaleDateString('en-Us', { month: 'short' }),
        date: newDate.getDate() < 10 ? '0' + (newDate.getDate()) : `${(newDate.getDate())}`,
        dateString
      };
      this.dates.push(dateobject);
      newDate = new Date(date.setDate(date.getDate() + 1));
    }
  }

  openFixture = (matchIndex: number) => {
    console.log(matchIndex);
  }

  changeDate = (dateString: string) => {
    const dateArr = dateString.split('-');
    const date = new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`);
    this.getDates(date);
  }

  getFixtures = (date: string) => {
    this.selectedDate = date;
  }

  getHomeStat = (fixture: number, team: number) => {
    this.dataService.getStats(fixture, team).subscribe(res => {
      this.homeStat = res.response[0];
    });
  }

  getAwayStat = (fixture: number, team: number) => {
    this.dataService.getStats(fixture, team).subscribe(res => {
      this.awayStat = res.response[0];
    });
  }

  clicked = () => {
    console.log('I am clicked.');
  }

}
