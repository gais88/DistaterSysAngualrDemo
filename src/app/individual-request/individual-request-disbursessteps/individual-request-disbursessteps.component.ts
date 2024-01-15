import { Component, OnInit, Output, ViewChild } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ApiService } from 'src/app/donor/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';








@Component({
  selector: 'app-individual-request-disbursessteps',
  templateUrl: './individual-request-disbursessteps.component.html',
  styleUrls: ['./individual-request-disbursessteps.component.scss']
})
export class IndividualRequestDisbursesstepsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api:ApiService ,private fb:FormBuilder) { }
id:number = 0;
disbursesAid:any
stepsFrom!:FormGroup
disbursesAidSteps = ["Idle","Prepare","Disburses","Delivered","Complete"]
isCompleted:boolean = true;



@ViewChild('stepper') stepper!: MatStepper;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   this.getDisbursesstepsDetails();


  }
  ngAfterViewInit() {
    switch(this.disbursesAid.disbursesSteps){
      case "Idle":
        this.stepper.selectedIndex = 0;
        break;
        case "Prepare":
          this.stepper.selectedIndex = 1;
          break;
          case "Disburses":
            this.stepper.selectedIndex = 2;
            break;
            case "Delivered":
              this.stepper.selectedIndex = 3;
              break;
              case "Complete":
                this.stepper.selectedIndex = 4;
                break;
        default:
          this.stepper.selectedIndex = 0;
    }
    console.log("first step" + this.stepper.selectedIndex)
}
  createStepsForm(){
    this.stepsFrom = this.fb.group({
      desc : [this.disbursesAid.desc,Validators.required],
      disbursesSteps : [this.disbursesAid.disbursesSteps],
    })

  }
  getDisbursesstepsDetails(){
    this.api.getDisbursesAid(this.id).subscribe({
      next:(res)=>{
        this.disbursesAid = res;
        this.createStepsForm()

    },
    error : (error)=>{

    }
  })
}

nexStep(){
  let nextdisbursesSteps:string="Idle";
  switch (this.stepper.selectedIndex)

  {
    case 1:
      nextdisbursesSteps = "Prepare";
      break;
      case 2:
        nextdisbursesSteps = "Disburses";
      break;
      case 3:
      nextdisbursesSteps = "Delivered";
      break;
      case 4:
        nextdisbursesSteps = "Complete";
      break;

  }
let data = {
  id : this.id,
  desc : this.stepsFrom.value.desc,
  disbursesSteps : nextdisbursesSteps

};
this.api.putDisbursesAidState(data).subscribe({
  next:(res) =>{
    this.getDisbursesstepsDetails()
    console.log("before edit "+this.stepper.selectedIndex)

    console.log("after edit " +this.stepper.selectedIndex)
  },
  error : (error)=>{
    alert(error.error)
  console.log(error.error);
  let currentIndex = this.stepper.selectedIndex
  this.stepper.selectedIndex = currentIndex;
  }


})



}
}
