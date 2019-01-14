import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CoreService } from '../../core/services/core.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private fb: FormBuilder,private coreService:CoreService) {
    this.loginForm = this
      .fb
      .group({
        email: [
          '', Validators.required
        ],
        password:['',Validators.required]

      });
   }

  ngOnInit() {
    this.coreService.hideSideNavToolbar();
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
