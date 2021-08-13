import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//import components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TournamentComponent } from './component/tournament/tournament.component';
import { BattlesComponent } from './component/battles/battles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentComponent,
    BattlesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
