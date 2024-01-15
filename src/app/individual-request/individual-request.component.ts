import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../donor/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialgoComponent } from './request-dialgo/request-dialgo.component';
import swal from 'sweetalert2'

@Component({
  selector: 'app-individual-request',
  templateUrl: './individual-request.component.html',
  styleUrls: ['./individual-request.component.scss']
})
export class IndividualRequestComponent implements OnInit {
  displayedColumns: string[] = ['id', 'desc', 'priority','affectedIndividual','totalAids','actions'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getRequests();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getRequests(){
    this.api.getIndividualRequests().subscribe({
      next:(res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
  openDialog() {

    const dialogRef = this.dialog.open(RequestDialgoComponent,{
      width: '30%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getRequests();
    });
  }

  disburses(row:any){

  }



}
