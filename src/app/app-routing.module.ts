import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';
import { ChallengeTabsComponent } from './challenges/challenge-tabs/challenge-tabs.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'editChallenge', component: ChallengeEditComponent },
  { path: 'challenges', component: ChallengeTabsComponent,
     children: [
      { path: 'today', component: TodayComponent, outlet: 'today' },
      { path: 'currentChallenge', component: CurrentChallengeComponent,
        outlet: 'currentChallenge' }
    ]},
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})

export class AppRoutingModule {}
