import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportsApp';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCharacters(1, 10).subscribe((res: any) => {
      console.log(res);
    });
  }
}
