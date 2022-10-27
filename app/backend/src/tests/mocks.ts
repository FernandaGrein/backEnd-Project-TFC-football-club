export const userMock = {
  id: 1,
  username: "Admin",
  role: "admin",
  email: "admin@admin.com",
  password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
};

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJVc2VyIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJpYXQiOjE2NjY4OTIxNjV9.pCHhEfqsbR8U0kwbt4Kpu0hKO3YZbTOA8a1vsHzlE7k";
export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjY2NzA3NjQ2fQ.K3aWJXLObC-PmaxYqNv2C5Zh4E1bdO3m3CHqNh5MCOM";

export const allGames = [
  {
    id: 1,
    homeTeam: 16,
    awayTeam: 8,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "São Paulo",
    },
    teamAway: {
      teamName: "Grêmio",
    },
  },
  {
    id: 2,
    homeTeam: 9,
    awayTeam: 14,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Internacional",
    },
    teamAway: {
      teamName: "Santos",
    },
  },
  {
    id: 3,
    homeTeam: 4,
    awayTeam: 11,
    homeTeamGoals: 3,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: "Corinthians",
    },
    teamAway: {
      teamName: "Napoli-SC",
    },
  },
  {
    id: 4,
    homeTeam: 3,
    awayTeam: 2,
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: "Botafogo",
    },
    teamAway: {
      teamName: "Bahia",
    },
  },
  {
    id: 5,
    homeTeam: 7,
    awayTeam: 10,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Flamengo",
    },
    teamAway: {
      teamName: "Minas Brasília",
    },
  },
  {
    id: 6,
    homeTeam: 5,
    awayTeam: 13,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Cruzeiro",
    },
    teamAway: {
      teamName: "Real Brasília",
    },
  },
  {
    id: 7,
    homeTeam: 12,
    awayTeam: 6,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
    inProgress: false,
    teamHome: {
      teamName: "Palmeiras",
    },
    teamAway: {
      teamName: "Ferroviária",
    },
  },
  {
    id: 8,
    homeTeam: 15,
    awayTeam: 1,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "São José-SP",
    },
    teamAway: {
      teamName: "Avaí/Kindermann",
    },
  },
  {
    id: 47,
    homeTeam: 8,
    awayTeam: 14,
    homeTeamGoals: 1,
    awayTeamGoals: 2,
    inProgress: true,
    teamHome: {
      teamName: "Grêmio",
    },
    teamAway: {
      teamName: "Santos",
    },
  },
  {
    id: 48,
    homeTeam: 13,
    awayTeam: 2,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Real Brasília",
    },
    teamAway: {
      teamName: "Bahia",
    },
  },
];

export const gamesInProgress = [
  {
    id: 41,
    homeTeam: 16,
    awayTeam: 9,
    homeTeamGoals: 2,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "São Paulo",
    },
    teamAway: {
      teamName: "Internacional",
    },
  },
  {
    id: 42,
    homeTeam: 6,
    awayTeam: 1,
    homeTeamGoals: 1,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "Ferroviária",
    },
    teamAway: {
      teamName: "Avaí/Kindermann",
    },
  },
  {
    id: 43,
    homeTeam: 11,
    awayTeam: 10,
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "Napoli-SC",
    },
    teamAway: {
      teamName: "Minas Brasília",
    },
  },
  {
    id: 44,
    homeTeam: 7,
    awayTeam: 15,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
    inProgress: true,
    teamHome: {
      teamName: "Flamengo",
    },
    teamAway: {
      teamName: "São José-SP",
    },
  },
  {
    id: 45,
    homeTeam: 5,
    awayTeam: 3,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Cruzeiro",
    },
    teamAway: {
      teamName: "Botafogo",
    },
  },
  {
    id: 46,
    homeTeam: 4,
    awayTeam: 12,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Corinthians",
    },
    teamAway: {
      teamName: "Palmeiras",
    },
  },
];

export const endedGames = [
  {
    id: 31,
    homeTeam: 8,
    awayTeam: 10,
    homeTeamGoals: 2,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: "Grêmio",
    },
    teamAway: {
      teamName: "Minas Brasília",
    },
  },
  {
    id: 32,
    homeTeam: 14,
    awayTeam: 11,
    homeTeamGoals: 5,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Santos",
    },
    teamAway: {
      teamName: "Napoli-SC",
    },
  },
  {
    id: 33,
    homeTeam: 1,
    awayTeam: 16,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Avaí/Kindermann",
    },
    teamAway: {
      teamName: "São Paulo",
    },
  },
  {
    id: 34,
    homeTeam: 9,
    awayTeam: 6,
    homeTeamGoals: 3,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Internacional",
    },
    teamAway: {
      teamName: "Ferroviária",
    },
  },
  {
    id: 35,
    homeTeam: 10,
    awayTeam: 5,
    homeTeamGoals: 1,
    awayTeamGoals: 3,
    inProgress: false,
    teamHome: {
      teamName: "Minas Brasília",
    },
    teamAway: {
      teamName: "Cruzeiro",
    },
  },
  {
    id: 36,
    homeTeam: 2,
    awayTeam: 7,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Bahia",
    },
    teamAway: {
      teamName: "Flamengo",
    },
  },
  {
    id: 37,
    homeTeam: 15,
    awayTeam: 13,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "São José-SP",
    },
    teamAway: {
      teamName: "Real Brasília",
    },
  },
  {
    id: 38,
    homeTeam: 14,
    awayTeam: 4,
    homeTeamGoals: 2,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Santos",
    },
    teamAway: {
      teamName: "Corinthians",
    },
  },
  {
    id: 39,
    homeTeam: 3,
    awayTeam: 11,
    homeTeamGoals: 2,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: "Botafogo",
    },
    teamAway: {
      teamName: "Napoli-SC",
    },
  },
  {
    id: 40,
    homeTeam: 12,
    awayTeam: 8,
    homeTeamGoals: 4,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Palmeiras",
    },
    teamAway: {
      teamName: "Grêmio",
    },
  },
  {
    id: 49,
    homeTeam: 10,
    awayTeam: 6,
    homeTeamGoals: 1,
    awayTeamGoals: 0,
    inProgress: false,
    teamHome: {
      teamName: "Minas Brasília",
    },
    teamAway: {
      teamName: "Ferroviária",
    },
  },
];

export const createdMatch = {
  id: 1,
  homeTeam: 16,
  homeTeamGoals: 2,
  awayTeam: 8,
  awayTeamGoals: 2,
  inProgress: true,
};

export const allTeams = [
  {
    id: 1,
    teamName: "Avaí/Kindermann",
  },
  {
    id: 2,
    teamName: "Bahia",
  },
  {
    id: 3,
    teamName: "Botafogo",
  },
  {
    id: 4,
    teamName: "Corinthians",
  },
  {
    id: 5,
    teamName: "Cruzeiro",
  },
  {
    id: 6,
    teamName: "Ferroviária",
  },
  {
    id: 7,
    teamName: "Flamengo",
  },
  {
    id: 8,
    teamName: "Grêmio",
  },
  {
    id: 9,
    teamName: "Internacional",
  },
  {
    id: 10,
    teamName: "Minas Brasília",
  },
  {
    id: 11,
    teamName: "Napoli-SC",
  },
  {
    id: 12,
    teamName: "Palmeiras",
  },
  {
    id: 13,
    teamName: "Real Brasília",
  },
  {
    id: 14,
    teamName: "Santos",
  },
  {
    id: 15,
    teamName: "São José-SP",
  },
  {
    id: 16,
    teamName: "São Paulo",
  },
];

export const teamById = [
  {
    id: 1,
    teamName: "Avaí/Kindermann",
  },
];
