import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Team } from 'src/app/shared/models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  teams: Team[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe((res: any) => {
      this.teams = res.teams;
      console.log(this.teams);
    });
  }

}
