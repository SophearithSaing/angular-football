export interface TeamStat {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  form: string;
  fixtures: {
    played: Fixture;
    wins: Fixture;
    draws: Fixture;
    loses: Fixture;
  };
  goals: {
    for: Goal;
    against: Goal;
  };
  biggest: {
    streak: {
      wins: number;
      draws: number;
      loses: number;
    };
    wins: {
      home: string;
      away: string;
    };
    loses: {
      home: string;
      away: string;
    };
    goals: {
      for: {
        home: number;
        away: number;
      };
      against: {
        home: number;
        away: number;
      };
    };
  };
  clean_sheet: Fixture;
  failed_to_score: Fixture;
  penalty: {
    scored: {
      total: 3;
      percentage: string;
    };
    missed: {
      total: 0;
      percentage: string;
    };
    total: number;
  };
  lineups: LineUp[];
  cards: {
    yellow: any;
    red: any;
  };
}

interface Fixture {
  home: number;
  away: number;
  total: number;
}

interface Goal {
  total: {
    home: number;
    away: number;
    total: number;
  };
  average: {
    home: string;
    away: string;
    total: string;
  };
  minutes: any;
}

interface LineUp {
  formation: string;
  played: number;
}
