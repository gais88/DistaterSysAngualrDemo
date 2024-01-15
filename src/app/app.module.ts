import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { DonorComponent } from './donor/donor.component';
import { DonorDialgoComponent } from './donor/donor-dialgo/donor-dialgo.component';
import { AffectedIndividualComponent } from './affected-individual/affected-individual.component';
import { AffectedDialgoComponent } from './affected-individual/affected-dialgo/affected-dialgo.component';
import { AidComponent } from './aid/aid.component';
import { AidDialgoComponent } from './aid/aid-dialgo/aid-dialgo.component';
import { IndividualRequestComponent } from './individual-request/individual-request.component';
import { RequestDialgoComponent } from './individual-request/request-dialgo/request-dialgo.component';
import { HomeComponent } from './home/home.component';
import { IndividualRequestDetailsComponent } from './individual-request/individual-request-details/individual-request-details.component';
import { DetailsDialgComponent } from './individual-request/individual-request-details/details-dialg/details-dialg.component';
import { IndividualRequestDisbursesstepsComponent } from './individual-request/individual-request-disbursessteps/individual-request-disbursessteps.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    DonorComponent,
    DonorDialgoComponent,
    AffectedIndividualComponent,
    AffectedDialgoComponent,
    AidComponent,

    AidDialgoComponent,
         IndividualRequestComponent,
         RequestDialgoComponent,
         HomeComponent,
         IndividualRequestDetailsComponent,
         DetailsDialgComponent,
         IndividualRequestDisbursesstepsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot()

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
