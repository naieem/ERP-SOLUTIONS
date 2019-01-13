import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatTableModule} from '@angular/material/table';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {HomeComponent} from './home/home.component';
import { AddDataComponent } from './add-data/add-data.component';
const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'item/:id',
    component: ItemDetailsComponent
  },
  {
    path: 'add',
    component: AddDataComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent, ItemDetailsComponent, AddDataComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule
  ]
})
export class HomeModule {}