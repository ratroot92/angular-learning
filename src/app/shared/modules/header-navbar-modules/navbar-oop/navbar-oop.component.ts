/* eslint-disable @typescript-eslint/no-empty-function */
import {Component} from '@angular/core'

@Component({
  selector: 'demo-app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarOopComponent {
  constructor() {}

  logout() {
    console.log('i am logout and i am called from base navbar base class')
  }
}
