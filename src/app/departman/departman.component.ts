import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  dataSource: Observable<Departman[]>;
  constructor(public departmanService: DepartmanService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    this.dataSource = this.departmanService.getAllDepartman();
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
}
