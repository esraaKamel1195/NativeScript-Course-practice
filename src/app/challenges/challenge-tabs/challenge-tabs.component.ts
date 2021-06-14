import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';
import { Page } from '@nativescript/core/ui/page';

@Component({
  selector: 'app-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css']
})
export class ChallengeTabsComponent implements OnInit {

  constructor(
    private router: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private page: Page
  ) { }

  ngOnInit(): void {
    this.router.navigate([{ outlets:
      {
      currentChallenge: ['currentChallenge'],
      today: ['today']
      }
    }],
    {
      relativeTo: this.activatedRoute
    });
    // this.page.actionBarHidden = true;
  }

}
