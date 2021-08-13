import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import models
import { Team } from 'src/app/models';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})

export class TournamentComponent implements OnInit {
  //creating teams<array>
  public teams: Team[] = [];

  //manipulate forms
  public form: FormGroup;
  public isSelected: boolean = false;
  public readyTeams!: number;

  //image and default image for null params
  public defaultImage = 'assets/images/logoLolJustL.png';
  public imageUrl = localStorage.getItem('teams.logo');

  constructor(private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      logo: [null],
    })
  }

  ngOnInit() {
    this.load();
    this.readyTeams = this.getReadyTeams()
  }

  //loading datas from localstorage
  public load(): void {
    const data = localStorage.getItem('teams');
    this.teams = data ? JSON.parse(data) : [];
  }

  //treatment for default images
  public onErrorImage(): void {
    if (this.imageUrl = '') {
      this.imageUrl = this.defaultImage
    } else {
      this.imageUrl
    }
  }

  //function to save items in localstorage
  public saveItem(): void {
    const data = JSON.stringify(this.teams);
    localStorage.setItem('teams', data)
  }

  //function to clean the form
  public clear(): void {
    this.form.reset()
  }

  //function to add items
  public add(): void {
    if(this.teams.length < 4) {
      const id = this.teams.length + 1;
      const name = this.form.controls['name'].value;
      const logo = this.form.controls['logo'].value;

      this.teams.unshift(new Team(id, name, logo))
      this.saveItem()
      this.clear()
    }
  }

  //function to remove items
  public del(team: Team): void {
    const index = this.teams.indexOf(team);
    if(index !== -1) {
      this.teams.splice(index, 1)
    }
    this.saveItem()
  }

  //get team as ready
  public getReadyTeams() {
    let quantity = 0;
    for(let i=0; i<this.teams.length; i++) {
      if(this.teams[i].ready) {
        quantity++;
      }
    }
    return quantity;
  }
}
