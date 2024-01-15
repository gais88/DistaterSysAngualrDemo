import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AffectedDialgoComponent } from './affected-dialgo/affected-dialgo.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../donor/services/api.service';

@Component({
  selector: 'app-affected-individual',
  templateUrl: './affected-individual.component.html',
  styleUrls: ['./affected-individual.component.scss']
})
export class AffectedIndividualComponent implements OnInit {

  constructor(private api:ApiService,private dialog:MatDialog) { }
  displayedColumns: string[] = ['id',  'fullname','phone', 'age','address'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAffectedIndividuals();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
getAffectedIndividuals(){
  this.api.getAffectedIndividuals().subscribe({
    next:(res) =>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err) =>{
      alert(err.error)
    }
  })
}
  openDialog() {

    const dialogRef = this.dialog.open(AffectedDialgoComponent,{
      width: '30%',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAffectedIndividuals();
    });
  }

}
