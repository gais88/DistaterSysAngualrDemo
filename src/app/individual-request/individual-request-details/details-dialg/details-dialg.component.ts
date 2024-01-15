import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/donor/services/api.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-details-dialg',
  templateUrl: './details-dialg.component.html',
  styleUrls: ['./details-dialg.component.scss']
})
export class DetailsDialgComponent implements OnInit {

  constructor(private fb: FormBuilder
    ,private api:ApiService
    ,private dialogRef:MatDialogRef<DetailsDialgComponent>,
    @Inject(MAT_DIALOG_DATA) public editDate: any ,private toastr: ToastrService) { }

    DisbursesAidForm!:FormGroup;
    aidTypes:string[] = ["Financial","Inkind"]

  ngOnInit(): void {
    this.createDisbursesAidForm();
  }
  createDisbursesAidForm(){
    this.DisbursesAidForm = this.fb.group({
      desc : ['',Validators.required],
      aidType : ['Financial',Validators.required],
      amount : ['',[Validators.required,Validators.min(0)]],
      individualRequestId:[`${this.editDate.id}`]


    })

  }
  addDisbrusesAid(){
if (this.DisbursesAidForm.valid){

      this.api.postDisbursesAid(this.DisbursesAidForm.value).subscribe({
        next:(res) =>{
           this.DisbursesAidForm.reset();
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

