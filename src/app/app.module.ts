import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component'
import { StackComponent } from './layouts/stack/stack.component'
import { FlexBoxComponent } from './layouts/flexBox/flex-box.component'
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';
import { TodayComponent } from './challenges/today/today.component';
import { AuthComponent } from './auth/auth.component';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    CurrentChallengeComponent,
    StackComponent,
    FlexBoxComponent,
    ChallengeEditComponent,
    TodayComponent,
    AuthComponent,
    ActionBarComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
