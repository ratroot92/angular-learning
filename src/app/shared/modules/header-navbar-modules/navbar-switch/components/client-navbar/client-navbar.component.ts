/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'demo-navbar-switch-client-navbar',
  templateUrl: './client-navbar.component.html',
})
export class ClientNavbarComponent {
  @Input('inputProps') inputProps: any
  @Output('appNameChanged') appNameChanged = new EventEmitter<{appName: string}>()
  constructor() {}

  onAppnameChanged(): void {
    this.appNameChanged.emit({appName: this.inputProps.appName === 'admin' ? 'client' : 'admin'})
  }
}
