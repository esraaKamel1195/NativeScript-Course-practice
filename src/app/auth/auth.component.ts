import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id
})

export class AuthComponent implements OnInit {

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit(): void {
  }

  // onSignUp() {
  //   this.router.navigate(['/today'], { clearHistory: true });
  // }
}
