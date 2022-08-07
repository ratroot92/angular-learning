import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { registerAction } from 'src/app/auth/store/actions'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import { isSubmittingSelector } from '../../store/selectors'

@Component({
  selector: 'demo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  form : FormGroup
  isSubmitting$:Observable<boolean>

  constructor(private fb: FormBuilder,private store:Store,private authService:AuthService) {}
  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['username', Validators.required],
      email: ['ahmed@ahmed.com', Validators.required],
      password: ['password', Validators.required],
    })
  }
  initializeValues():void{
   //@ts-ignore
this.isSubmitting$=this.store.pipe(select(isSubmittingSelector))
// console.log('this.isSubmitting',this.isSubmitting$)
  }
  onSubmit(): void {
    if(this.form.valid){
        console.log('submit', this.form.value)
        this.store.dispatch(registerAction(this.form.value))
        this.authService.register(this.form.value).subscribe((currentUser:CurrentUserInterface)=>{
            console.log(currentUser)
        })
    }
  }
}
