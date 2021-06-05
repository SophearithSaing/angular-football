export interface FixtureStat {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  statistics: Array<{ type: string; value: number; }>;
}
