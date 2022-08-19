/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component} from '@angular/core'

@Component({
  selector: 'demo-dynamic',
  // template: '<div ng-include="getTemplate()">',
  // @ts-ignore
  templateUrl: function (elem, attrs) {
    return '/home/asd/Desktop/development/angular/angular-learning/src/app/shared/modules/navbar/navbar.component.html'
  },
})
export class DynamicComponent {
  constructor() {}

  getTemplate() {
    console.log('============================================')
    console.log('============================================')
    console.log('============================================')

    return '/home/asd/Desktop/development/angular/angular-learning/src/app/shared/modules/navbar/navbar.component.html'
  }
}

@Component({
  selector: 'demo-dynamic',
  properties: ['idx'],
  template: `<h1>Simple block for {{ idx }}</h1>`,
  directives: [],
})
class dt2SimpleBlock {
  constructor() {}
}
