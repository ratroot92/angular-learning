/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputProps: any = {appName: 'client'}
  constructor() {}

  // ngOnChanges(changes: any): void {
  //   console.log('Changed', changes.outputProps.currentValue, changes.outputProps.previousValue)
  // }

  ngOnInit(): void {
    // console.log('Init', this.inputProps)
  }
}
