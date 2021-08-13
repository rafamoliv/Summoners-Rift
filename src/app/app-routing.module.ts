import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import routes
import { HomeComponent } from './component/home/home.component';
import { TournamentComponent } from './component/tournament/tournament.component';
import { BattlesComponent } from './component/battles/battles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'battles', component: BattlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
