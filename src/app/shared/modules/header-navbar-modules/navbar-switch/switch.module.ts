/* eslint-disable @typescript-eslint/no-empty-function */
import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {AdminNavbarComponent} from 'src/app/shared/modules/header-navbar-modules/navbar-switch/components/admin-navbar/admin-navbar.component'
import {ClientNavbarComponent} from 'src/app/shared/modules/header-navbar-modules/navbar-switch/components/client-navbar/client-navbar.component'
import {NavbarSwitchComponent} from 'src/app/shared/modules/header-navbar-modules/navbar-switch/components/navbar-switcher/navbar-switcher.compoenent'

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [AdminNavbarComponent, ClientNavbarComponent, NavbarSwitchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ClientNavbarComponent, AdminNavbarComponent, NavbarSwitchComponent],
})
export class NavbarSwitchModule {
  constructor() {}
}
