import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {registerAction} from 'src/app/auth/store/actions/register.action'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {
  currentUserSelector,
  isSubmittingSelector,
  validationErrorSelectror,
} from '../../store/selectors'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

@Component({
  selector: 'demo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  ScurrentUser$: Observable<CurrentUserInterface>
  backendErrors$: Observable<BackendErrorsInterface | any>

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['ahmedkabeer', Validators.required],
      email: ['ahmedkabeer@evergreen.com', Validators.required],
      password: ['pakistan', Validators.required],
      mobile: ['3441500542', Validators.required],
    })
  }
  initializeValues(): void {
    //@ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    //@ts-ignore
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    //@ts-ignore
    this.backendErrors$ = this.store.pipe(select(validationErrorSelectror))
  }
  onSubmit(): void {
    // if(this.form.valid){
    const request: RegisterRequestInterface = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
      mobile: this.form.value.mobile,
    }
    this.store.dispatch(registerAction({request}))
    // }
  }
}
