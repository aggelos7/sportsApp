import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TeamComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: TeamComponent
    }])
  ]
})
export class TeamModule { }
