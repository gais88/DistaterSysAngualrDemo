import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2'


@Component({
  selector: 'app-donor-dialgo',
  templateUrl: './donor-dialgo.component.html',
  styleUrls: ['./donor-dialgo.component.scss']
})
export class DonorDialgoComponent implements OnInit {
  constructor(private fb: FormBuilder
    ,private api:ApiService
    ,private dialogRef:MatDialogRef<DonorDialgoComponent>,private toastr: ToastrService ) { }

  donorForm !: FormGroup
  ngOnInit(): void {
    this.createDonorForm();
  }

  createDonorForm(){
    this.donorForm = this.fb.group({
      'name' : ['',Validators.required],
      'email' : ['',[Validators.required,Validators.email]],
      'phone' : ['',Validators.required],
      'address': ['',[Validators.required,Validators.maxLength(250)]],

    })
  }

  addDonor(){

    if (this.donorForm.valid){

      this.api.PostDonor(this.donorForm.value).subscribe({
        next:(res) =>{
           this.donorForm.reset();
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
