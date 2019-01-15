import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes : Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
