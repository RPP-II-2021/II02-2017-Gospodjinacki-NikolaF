import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { StatusDialogComponent } from '../dialog/status-dialog/status-dialog.component';
import { Status } from '../model/status.model';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];

 // dataSource: Observable<Status[]>;
    dataSource: MatTableDataSource<Status>;
    @ViewChild(MatPaginator)
    paginator: MatPaginator;
    @ViewChild(MatSort)
    sort: MatSort;

  selektovanStatus: Status;

  constructor(public statusService: StatusService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
   //this.dataSource = this.statusService.getAllStatus();
   this.statusService.getAllStatus().subscribe(data =>{
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
  public openDialog(flag: number, id: number, naziv: string, oznaka: string){
    const dialog = this.dialog.open(StatusDialogComponent, {data:
      {id: id, naziv: naziv, oznaka: oznaka}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  public selectedRow(row) {
    this.selektovanStatus = row;
  }

  applyFilter(filterValue: string){
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
