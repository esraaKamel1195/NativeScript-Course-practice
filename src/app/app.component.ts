import { Component } from '@angular/core'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activeChallenge: string = '';

  onChallengeInput(challengeDescription: string) {
    this.activeChallenge = challengeDescription;
  }
}
