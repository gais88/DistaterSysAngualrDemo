import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DonorComponent } from './donor/donor.component';
import { AffectedIndividualComponent } from './affected-individual/affected-individual.component';
import { AidComponent } from './aid/aid.component';
import { IndividualRequestComponent } from './individual-request/individual-request.component';
import { HomeComponent } from './home/home.component';
import { IndividualRequestDetailsComponent } from './individual-request/individual-request-details/individual-request-details.component';
import { IndividualRequestDisbursesstepsComponent } from './individual-request/individual-request-disbursessteps/individual-request-disbursessteps.component';
const routes: Routes = [

  {path:'donors' , component:DonorComponent},
  {path:'AffectedIndividual' , component:AffectedIndividualComponent},
  {path:'aids' , component:AidComponent},
  {path:'individualRequest' , component:IndividualRequestComponent},
  {path:'individualRequest/:id' , component:IndividualRequestDetailsComponent},
  {path:'disbursesAidSteps/:id' , component:IndividualRequestDisbursesstepsComponent},
  {path:'' , component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
