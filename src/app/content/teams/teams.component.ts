import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { Team } from 'src/app/shared/models/team';
import { newTeamsList } from 'src/app/store/app.actions';
import { selectAppState } from 'src/app/store/app.selectors';

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
    private store: Store<{ appState: Team[] }>,
  ) { }

  ngOnInit() {
    this.selectStore();

    if (!this.teams.length) {
      this.apiService.getTeams().subscribe((res: any) => {
        this.teams = res.teams;
        console.log(this.teams);
        this.store.dispatch(newTeamsList({ teams: this.teams }));
      });
    }
  }

  goToTeamDetails(item: Team) {
    this.router.navigate(['teams', item.idTeam]);
  }

  search(event) {
    // reset teams list (case when search2 has more values than search1)
    this.selectStore();

    if (event != '') {
      this.teams = this.teams.filter((item: Team) => item.strTeam.toLowerCase().includes(event.toLowerCase()));
    }
  }

  filter(event) {
    if (event == 'asc') {
      // order by intFormedYear asc
      this.teams = [...this.teams].sort((a: Team, b: Team) => +a.intFormedYear - +b.intFormedYear);
    } else if (event == 'desc') {
      // order by intFormedYear desc
      this.teams = [...this.teams].sort((a: Team, b: Team) => +b.intFormedYear - +a.intFormedYear);
    } else {
      // order by strTeam asc
      this.teams = [...this.teams].sort((a: Team, b: Team) => a.strTeam.localeCompare(b.strTeam));
    }
  }

  selectStore() {
    this.store.select(selectAppState).subscribe((res: any) => {
      this.teams = res.teams;
    });
  }

}
