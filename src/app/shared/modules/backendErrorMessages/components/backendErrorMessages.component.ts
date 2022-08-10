import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'demo-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface //alias Props will be readonly

  errorMessages: string[]

  ngOnInit(): void {
    if (this.backendErrorsProps) {
      if (Object.keys(this.backendErrorsProps).length) {
        this.errorMessages = Object.keys(this.backendErrorsProps).map(
          (name: string) => {
            const messages = this.backendErrorsProps[name]
            return `${messages}`
          }
        )
      }
    }
  }
}
