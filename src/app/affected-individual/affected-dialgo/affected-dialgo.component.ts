import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/donor/services/api.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-affected-dialgo',
  templateUrl: './affected-dialgo.component.html',
  styleUrls: ['./affected-dialgo.component.scss']
})
export class AffectedDialgoComponent implements OnInit {

  constructor(private fb: FormBuilder
    ,private api:ApiService
    ,private dialogRef:MatDialogRef<AffectedDialgoComponent>,private toastr: ToastrService) { }
AffectedForm!:FormGroup
  ngOnInit(): void {
    this.createAffectedForm();
  }
  createAffectedForm(){
    this.AffectedForm = this.fb.group({
      'fullName' : ['',Validators.required],
      'age' : ['',[Validators.required,Validators.min(20)]],
      'phone' : ['',Validators.required],
      'address': ['',[Validators.required,Validators.maxLength(250)]],

    })
  }

  addAffected(){
    if (this.AffectedForm.valid){
      this.api.PostAffectedIndividual(this.AffectedForm.value).subscribe({
        next:(res) =>{
           this.AffectedForm.reset();
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
