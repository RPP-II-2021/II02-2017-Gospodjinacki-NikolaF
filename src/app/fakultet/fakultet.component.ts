import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FakultetDialogComponent } from '../dialog/fakultet-dialog/fakultet-dialog.component';
import { Fakultet } from '../model/fakultet.model';
import { FakultetService } from '../service/fakultet.service';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css']
})
export class FakultetComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'sediste', 'actions'];
  dataSource: Observable<Fakultet[]>;
  constructor(public FakultetService: FakultetService,
    public dialog: MatDialog) {

     }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    this.dataSource = this.FakultetService.getAllFakultet();
  }

  public openDialog(flag: number, id: number, naziv: string, sediste: string){
    const dialog = this.dialog.open(FakultetDialogComponent, {data:{id: id, naziv: naziv, sediste: sediste}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1 ) {
        this.loadData();
      }
    })
  }

}
