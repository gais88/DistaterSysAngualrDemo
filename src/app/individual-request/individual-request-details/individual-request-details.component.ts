import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/donor/services/api.service';
import { DetailsDialgComponent } from './details-dialg/details-dialg.component';
import swal from 'sweetalert2'


@Component({
  selector: 'app-individual-request-details',
  templateUrl: './individual-request-details.component.html',
  styleUrls: ['./individual-request-details.component.scss']
})
export class IndividualRequestDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api:ApiService,private dialog:MatDialog) { }
id:number = 0;
requestDetails:any;
displayedColumns: string[] = ['id', 'desc', 'amount', 'aidType','disbursesSteps','actions'];
dataSource!: MatTableDataSource<any>;


@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getDetails();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getDetails(){
    this.api.getIndividualRequestsDetails(this.id).subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.disbursesAids);
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

    const dialogRef = this.dialog.open(DetailsDialgComponent,{
      width: '30%',
      data:{
        id:this.id,
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getDetails();
    });
  }


}
