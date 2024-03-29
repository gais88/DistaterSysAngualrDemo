import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../donor/services/api.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { }
  bankTotal :number = 0;
  warehouse :number = 0;
  ngOnInit(): void {

    this.getWarehoueseTotal("warehouse");
    this.getBankTotal("bank");
  }

  getBankTotal(type:string){
    this.api.getInventoryCountByType(type).subscribe({
      next:(res)=>{
        this.bankTotal = res
      },
      error : (err)=>{
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erros!" + err.error,

        });
      }
    })
  }
  getWarehoueseTotal(type:string){
    this.api.getInventoryCountByType(type).subscribe({
      next:(res)=>{
        this.warehouse = res
      }
    })
  }

}
