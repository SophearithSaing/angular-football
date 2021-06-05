import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullDate = new Date();
  selectedDate: string;
  dates: Array<{month: string, date: string | number}>;

  plFixtures = [];
  fixtures = {};

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

  homeStat = {
    team: {
      id: 463,
      name: 'Aldosivi',
      logo: 'https://media.api-sports.io/football/teams/463.png'
    },
    statistics: [
      {
        type: 'Shots on Goal',
        value: 3
      },
      {
        type: 'Shots off Goal',
        value: 2
      },
      {
        type: 'Total Shots',
        value: 9
      },
      {
        type: 'Blocked Shots',
        value: 4
      },
      {
        type: 'Shots insidebox',
        value: 4
      },
      {
        type: 'Shots outsidebox',
        value: 5
      },
      {
        type: 'Fouls',
        value: 22
      },
      {
        type: 'Corner Kicks',
        value: 3
      },
      {
        type: 'Offsides',
        value: 1
      },
      {
        type: 'Ball Possession',
        value: '32%'
      },
      {
        type: 'Yellow Cards',
        value: 5
      },
      {
        type: 'Red Cards',
        value: 1
      },
      {
        type: 'Goalkeeper Saves',
        value: null
      },
      {
        type: 'Total passes',
        value: 242
      },
      {
        type: 'Passes accurate',
        value: 121
      },
      {
        type: 'Passes %',
        value: null
      }
    ]
  };

  awayStat = {
    team: {
      id: 463,
      name: 'Aldosivi',
      logo: 'https://media.api-sports.io/football/teams/463.png'
    },
    statistics: [
      {
        type: 'Shots on Goal',
        value: 3
      },
      {
        type: 'Shots off Goal',
        value: 2
      },
      {
        type: 'Total Shots',
        value: 9
      },
      {
        type: 'Blocked Shots',
        value: 4
      },
      {
        type: 'Shots insidebox',
        value: 4
      },
      {
        type: 'Shots outsidebox',
        value: 5
      },
      {
        type: 'Fouls',
        value: 22
      },
      {
        type: 'Corner Kicks',
        value: 3
      },
      {
        type: 'Offsides',
        value: 1
      },
      {
        type: 'Ball Possession',
        value: '32%'
      },
      {
        type: 'Yellow Cards',
        value: 5
      },
      {
        type: 'Red Cards',
        value: 1
      },
      {
        type: 'Goalkeeper Saves',
        value: null
      },
      {
        type: 'Total passes',
        value: 242
      },
      {
        type: 'Passes accurate',
        value: 121
      },
      {
        type: 'Passes %',
        value: null
      }
    ]
  };

  matchStat = {
    home: this.homeStat,
    away: this.awayStat
  };

  sampleFixtures = [this.sampleFixture, this.sampleFixture, this.sampleFixture];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.getFixtures();
    this.getDates(this.fullDate);
  }

  getDates = (date: Date) => {
    this.dates = [];
    let newDate = new Date(date.setDate(date.getDate() - 1));
    for (let round = 0; round < 5; round++) {
      const dateString = `${newDate.getDate() < 9 ? '0' + (newDate.getDate()) : (newDate.getDate())}-${newDate.getMonth() < 9 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1)}-${newDate.getFullYear()}`;
      const dateobject = {
        month: newDate.toLocaleDateString('en-Us', { month: 'short' }),
        date: newDate.getDate() < 9 ? '0' + (newDate.getDate()) : (newDate.getDate())
      };
      this.dates.push(dateobject);
      newDate = new Date(date.setDate(date.getDate() + 1));
    }
  }

  openFixture = (matchIndex: number) => {
    console.log(matchIndex);
  }

  getSelectedDate = (date: string) => {
    console.log(date);
  }

  // changeDate = (dateString: string) => {
  //   const dateArr = dateString.split('-');
  //   const date = new Date(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`);
  //   this.getDates(date);
  // }

  getFixtures = (date: string) => {
    // TODO: format the date to get new string

    // TODO: Run getFixtures service
  }

  clicked = () => {
    console.log('I am clicked.');
  }

}
