import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { AddEditModelComponent } from './add-edit-model/add-edit-model.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:'',component:ViewListComponent},
  {path:'add',component:AddEditModelComponent},
  {path:'edit/:id',component:AddEditModelComponent},
  {path:'view',component:ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
