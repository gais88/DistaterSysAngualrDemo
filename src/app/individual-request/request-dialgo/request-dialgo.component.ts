import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/donor/services/api.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-request-dialgo',
  templateUrl: './request-dialgo.component.html',
  styleUrls: ['./request-dialgo.component.scss']
})
export class RequestDialgoComponent implements OnInit {

  constructor(private fb: FormBuilder
    ,private api:ApiService
    ,private dialogRef:MatDialogRef<RequestDialgoComponent>,private toastr: ToastrService) { }
requestForm!: FormGroup;
AffectedIndividuals:any[]=[]
priorities:string[] = ["Low",'Med','High'];
  ngOnInit(): void {
    this.createRequestForm();
    this.getAffectedIndividuals();
  }
  getAffectedIndividuals(){
    this.api.getAffectedIndividuals().subscribe({
      next:(res)=>{
        this.AffectedIndividuals = res;
      }
    })
  }
  createRequestForm(){
    this.requestForm = this.fb.group({
      'desc' : ['',Validators.required],
      'priority' : ['',Validators.required],
      'affectedIndividualId': ['',[Validators.required]],

    })
  }
  addRequest(){
    if (this.requestForm.valid){
      this.api.postIndividualRequest(this.requestForm.value).subscribe({
        next:(res) =>{
           this.requestForm.reset();
           this.dialogRef.close("save");
           this.toastr.success('Success', 'Items Is saved');

        },
        error:(err) =>{
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erros!" + err.error,

          });
        }
      })
    }
  }

}
