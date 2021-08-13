export class Team {
    constructor(
      //variable elements
      public id: Number,
      public name: String,
      public logo: String,

      //set elements
      public ready: boolean = true,
      public semiFinalsWinner: boolean = false,
      public finalWinner: boolean = false,
      public winner: boolean = false,
    ) {}
  }