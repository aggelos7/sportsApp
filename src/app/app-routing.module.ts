import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: 'teams', loadChildren: () => import('./content/teams/teams.module').then(m => m.TeamsModule) },
  { path: 'teams/:tname', loadChildren: () => import('./content/team/team.module').then(m => m.TeamModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
