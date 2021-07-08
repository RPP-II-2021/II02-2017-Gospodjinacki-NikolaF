import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DepartmanDialogComponent } from '../dialog/departman-dialog/departman-dialog.component';
import { Departman } from '../model/departman.model';
import { Fakultet } from '../model/fakultet.model';
import { DepartmanService } from '../service/departman.service';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.css']
})
export class DepartmanComponent implements OnInit {

  displayedColumns = ['id','fakultet', 'naziv', 'oznaka', 'actions'];

  dataSource: MatTableDataSource<Departman>;
    @ViewChild(MatPaginator)
    paginator: MatPaginator;
    @ViewChild(MatSort)
    sort: MatSort;

  //dataSource: Observable<Departman[]>;
  constructor(public departmanService: DepartmanService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    //this.dataSource = this.statusService.getAllStatus();
    this.departmanService.getAllDepartman().subscribe(data =>{
     this.dataSource = new MatTableDataSource(data);
     this.dataSource.sortingDataAccessor = (data, property) => {
       switch(property) {
         case 'id': return data[property];
         default: return data[property].toLocaleLowerCase();
       }
     };

     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    });
   }

  public openDialog(flag: number, id: number, fakultet: Fakultet, naziv: string, oznaka: string){
    const dialog = this.dialog.open(DepartmanDialogComponent, {data:
      {id: id, fakultet:fakultet, naziv: naziv, oznaka: oznaka}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }
  applyFilter(filterValue: string){
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
