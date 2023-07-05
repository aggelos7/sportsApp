import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  darkmode: boolean;

  ngOnInit() {
    this.setMode(localStorage.getItem('sportsApp_theme'));
  }

  setMode(theme: string) {
    this.darkmode = false;
    if (theme) {
      localStorage.setItem('sportsApp_theme', theme);
      if (theme == 'dark') {
        document.documentElement.classList.add('dark');
        this.darkmode = true;
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
