export interface Fixture {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    }
    venue: {
      id: number;
      name: string;
      city: string;
    }
    status: {
      long: string;
      short: string;
      elapsed: number;
    }
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: Team;
    away: Team;
  };
  goals: Score;
  score: {
    halftime: Score;
    fulltime: Score;
    extratime: Score;
    penalty: Score;
  };
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface Score {
  home: number;
  away: number;
}
