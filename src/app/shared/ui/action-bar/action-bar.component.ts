import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid } from "@nativescript/core/platform";
import { Page } from '@nativescript/core/ui/page';

declare var android: any;

@Component({
  selector: 'ng-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id
})

export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton: Boolean = true;

  constructor(
    private router: RouterExtensions,
    private page: Page
  ) { }

  ngOnInit(): void {
  }

  canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }

  onLoadActionBar() {
    if( isAndroid ) {
      const androidToolbar = this.page.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if( backButton ) {
        backButton.setColorFilter( android.graphics.color.parseColor('#171717'),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }
}
