import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/donor/services/api.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-aid-dialgo',
  templateUrl: './aid-dialgo.component.html',
  styleUrls: ['./aid-dialgo.component.scss']
})
export class AidDialgoComponent implements OnInit {

  constructor(private fb: FormBuilder
    ,private api:ApiService
    ,private dialogRef:MatDialogRef<AidDialgoComponent>,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createAidForm()

    this.api.getDonors().subscribe({
      next:(res)=>{
        this.donors = res;
      }
    })
  }
  aidForm !: FormGroup
  aidTypes:string[] = ["Financial","Inkind"]
  donors:any[] =[];

  createAidForm(){
    this.aidForm = this.fb.group({
      'desc' : ['',Validators.required],
      'amount' : ['',[Validators.required]],
      'aidType' : ['',Validators.required],
      'donorId': ['',[Validators.required]],

    })
  }

  addAid(){
    if (this.aidForm.valid){
      this.api.PostAid(this.aidForm.value).subscribe({
        next:(res) =>{
           this.aidForm.reset();
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
