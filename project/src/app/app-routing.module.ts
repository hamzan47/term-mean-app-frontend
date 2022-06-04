import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {
  ComplaintDepartmentDetailsComponent
} from "./complaint-department-details/complaint-department-details.component";
import {ComplaintDepartmentComponent} from "./complaint-department/complaint-department.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: "complaintDept/:departmentName/:id", component: ComplaintDepartmentDetailsComponent},
  {path: "complaintDept", component: ComplaintDepartmentComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }