/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'demo-switch-navbar',
  templateUrl: './navbar-switcher.component.html',
})
export class NavbarSwitchComponent implements OnInit {
  @Input('inputProps') inputProps: any

  constructor() {}

  ngOnInit(): void {}
  onAppnameChanged(eventData: {appName: string}): void {
    this.inputProps.appName = eventData.appName
  }
}
