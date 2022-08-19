/* eslint-disable @typescript-eslint/no-empty-function */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {AdminNavbarOopComponent} from './admin-navbar/admin-navbar-oop.component'
import {ClientNavbarOopComponent} from './client-navbar/client-navbar-oop.component'
import {NavbarOopComponent} from './navbar-oop.component'

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [NavbarOopComponent, AdminNavbarOopComponent, ClientNavbarOopComponent],
  exports: [NavbarOopComponent, AdminNavbarOopComponent, ClientNavbarOopComponent],
})
export class NavbarOopModule {
  constructor() {}
}
