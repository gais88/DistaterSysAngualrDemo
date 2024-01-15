import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AidDialgoComponent } from './aid-dialgo/aid-dialgo.component';
import { ApiService } from '../donor/services/api.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-aid',
  templateUrl: './aid.component.html',
  styleUrls: ['./aid.component.scss']
})
export class AidComponent implements OnInit {

  constructor(private dialog:MatDialog,private api:ApiService) { }
  displayedColumns: string[] = ['id', 'desc', 'aidType', 'amount','donorName'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getAids();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAids(){
    this.api.getAids().subscribe({
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

    const dialogRef = this.dialog.open(AidDialgoComponent,{
      width: '30%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAids();
    });
  }

}
