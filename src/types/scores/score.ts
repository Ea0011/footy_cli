export type Score = {
  winner: string;
  duration: string;
  halfTime: {
    homeTeam: string;
    awayTeam: string;
  };
  fullTime: {
    homeTeam: string;
    awayTeam: string;
  };
  extraTime: {
    homeTeam: string;
    awayTeam: string;
  };
  penalties: {
    homeTeam: string;
    awayTeam: string;
  };
}
