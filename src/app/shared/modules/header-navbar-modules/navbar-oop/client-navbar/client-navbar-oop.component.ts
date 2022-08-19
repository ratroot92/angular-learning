/* eslint-disable @typescript-eslint/no-empty-function */
import {Component} from '@angular/core'
import {NavbarOopComponent} from '../navbar-oop.component'

@Component({
  selector: 'demo-client-navbar-oop',
  templateUrl: './client-navbar-oop.component.html',
})
export class ClientNavbarOopComponent extends NavbarOopComponent {
  constructor() {
    super()
  }
  clientLogout(): void {
    console.log('this method is called from client navbar compoenent ')
    super.logout()
  }
}
