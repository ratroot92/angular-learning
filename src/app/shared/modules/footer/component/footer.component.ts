/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  ViewContainerRef,
  ViewChild,
  ComponentRef,
  DynamicComponentLoader,
} from '@angular/core'

// @Component({
//   selector: 'demo-app-shared-footer',
//   templateUrl: './footer.component.html',
// })
// export class FooterComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {
//     console.log(this)
//   }
// }

import {} from '@angular/core'

@Component({
  selector: 'demo-app-shared-footer',
  template: '~~LOADED COMPONENT WITH VAR: {{ varValue }}~~',
})
class LodadedWithVarComponent {
  varValue = 'defaultVarValue'
}

@Component({
  selector: 'my-app',
  template: '(<span #myVar></span>)<br>Parent',
})
export class Footer {
  @ViewChild('myVar', {read: ViewContainerRef}) myVar: ViewContainerRef

  constructor(private dcl: DynamicComponentLoader) {}

  ngAfterViewInit() {
    this.dcl
      .loadNextToLocation(LodadedWithVarComponent, this.myVar)
      .then((c: ComponentRef<any>) => {
        c.instance.varValue = 'changed-var-value' // <-- This is where the magic happens!
      })
  }
}
