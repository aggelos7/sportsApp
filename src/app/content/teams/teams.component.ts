import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { Team } from 'src/app/shared/models/team';
import { newTeamsList } from 'src/app/store/app.actions';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  teams: Team[] = [];
  
  constructor(
    private apiService: ApiService,
    private router: Router,
    private store: Store<{appState: Team[]}>,
    ) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe((res: any) => {
      this.teams = res.teams;
      console.log(this.teams);
      this.store.dispatch(newTeamsList({teams: this.teams}));
    });
  }

  goToTeamDetails(item: Team) {
    this.router.navigate(['teams', item.idTeam]);
  }

}
