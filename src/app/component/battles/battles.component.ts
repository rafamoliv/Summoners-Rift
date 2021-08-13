import { Component, OnInit } from '@angular/core';

//import models
import { Team } from 'src/app/models';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.scss']
})
export class BattlesComponent implements OnInit {

  //battles array
  public battles: Team[] = []

  //semi-finals array
  public semiFinalsBattle1: Team[] = [];
  public semiFinalsBattle2: Team[] = [];

  //final array
  public final: Team[] = [];

  //team winner
  public winner: Team[] = [];

  //define who wins the semi-finals
  public semiFinalsWinnerBattle1 = false;
  public semiFinalsWinnerBattle2 = false;

  //define who wins the final
  public finalWinnerTournament = false;

  public defaultImage = 'assets/images/logoLolJustL.png';

  constructor() { }

  //load and begin semi-finals
  ngOnInit() {
    this.load();
    this.semiFinals();
  }

  //load database /teams
  public load(): void {
    const data = localStorage.getItem('teams');
    const team: Team[] = data ? JSON.parse(data) : [];

    for(let i=0; i<team.length; i++) {
      if(team[i]) {
        this.battles.push(team[i]);
      }
    }
  }

  //define semifinals battle
  private semiFinals() {
    this.semiFinalsBattle1 = this.battles.slice(0, 2);
    this.semiFinalsBattle2 = this.battles.slice(2, 4);
  }

  //define semifinals bracket
  private groupSemiFinalsWinner(group: any) {
    if (group == 1)
      this.semiFinalsWinnerBattle1 = true;

    if (group == 2)
      this.semiFinalsWinnerBattle2 = true;
  }

  //define semifinals winner
  public semiFinalsWinner(team: Team, group: any) {
    team.semiFinalsWinner = true
    this.final.push(team)
    this.groupSemiFinalsWinner(group)
  }

  //define final winner
  public finalWinner(team: Team) {
    team.finalWinner = true;
    this.winner.push(team)
    this.finalWinnerTournament = true;
  }
}
