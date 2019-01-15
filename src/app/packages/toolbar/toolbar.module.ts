import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatIconModule, MatMenuModule,MatToolbarModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
// import {  } from ;
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[ToolbarComponent]
})
export default class ToolbarModule { }
