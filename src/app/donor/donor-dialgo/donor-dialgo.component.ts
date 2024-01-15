import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-donor-dialgo',
  templateUrl: './donor-dialgo.component.html',
  styleUrls: ['./donor-dialgo.component.scss']
})
export class DonorDialgoComponent implements OnInit {
  constructor(private fb: FormBuilder
    ,private api:ApiService
    ,private dialogRef:MatDialogRef<DonorDialgoComponent> ) { }

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
      alert("dsds");
      this.api.PostDonor(this.donorForm.value).subscribe({
        next:(res) =>{
           this.donorForm.reset();
           this.dialogRef.close("save");

        },
        error:(err) =>{
          alert(err.error)
        }
      })
    }
  }

}
