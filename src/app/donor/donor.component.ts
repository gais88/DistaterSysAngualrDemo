import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from './services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DonorDialgoComponent } from './donor-dialgo/donor-dialgo.component';




@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss']
})
export class DonorComponent implements OnInit {

  constructor(private api:ApiService,private dialog:MatDialog) { }
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','address'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
   this.getDonors();
  }
  getDonors(){
    this.api.getDonors().subscribe({
      next:(res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err) =>{
        alert ("Error from Api ");
      }
    })
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    
    const dialogRef = this.dialog.open(DonorDialgoComponent,{
      width: '30%',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getDonors();
    });
  }


}
