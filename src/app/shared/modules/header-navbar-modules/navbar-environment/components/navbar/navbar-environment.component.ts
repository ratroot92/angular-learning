/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, OnInit} from '@angular/core'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'demo-navbar-environment',
  templateUrl: `./themes/${environment.sharedHeader.theme}-navbar.component.html`,
})
export class NavbarEnvironmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this)
  }
}
