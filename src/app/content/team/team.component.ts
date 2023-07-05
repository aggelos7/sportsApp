import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Team } from 'src/app/shared/models/team';
import { newTeamsList } from 'src/app/store/app.actions';
import { selectAppState } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  team$: Observable<Team>;
  teams: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private store: Store<{ appState: Team[] }>,
  ) { }

  ngOnInit(): void {

    // the api call 'Search for team by name' is not working as supposed (returns only Arsenal), so I'm using the store to get the team data
    this.store.select(selectAppState).subscribe((res: any) => {
      this.teams = res.teams;
    });

    this.route.params.subscribe(params => {
      const teamName = params['tname'];
      if (this.teams.length > 0) {
        this.team$ = of(this.teams.filter((item: Team) => item.idTeam === teamName)[0]);
      } else {
        this.apiService.getTeams().subscribe((res: any) => {
          this.teams = res.teams;
          this.store.dispatch(newTeamsList({ teams: this.teams }));
          this.team$ = of(this.teams.filter((item: Team) => item.idTeam === teamName)[0]);
        });
      }

        // this.apiService.getTeamByName(this.teamName).subscribe((res: any) => {
        //   console.log(res);
        // });


      });
  }

}
