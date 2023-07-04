import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [
    TeamsComponent,
    SearchComponent,
    FiltersComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: TeamsComponent
    }])
  ]
})
export class TeamsModule { }
