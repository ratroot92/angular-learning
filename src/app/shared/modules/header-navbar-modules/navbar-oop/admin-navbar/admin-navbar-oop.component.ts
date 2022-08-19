/* eslint-disable @typescript-eslint/no-empty-function */
import {Component} from '@angular/core'
import {NavbarOopComponent} from '../navbar-oop.component'

@Component({
  selector: 'demo-admin-navbar-oop',
  templateUrl: './admin-navbar-oop.component.html',
})
export class AdminNavbarOopComponent extends NavbarOopComponent {
  constructor() {
    super()
  }

  adminLogout(): void {
    console.log('this method is called from admin navbar compoenent ')
    super.logout()
  }
}
