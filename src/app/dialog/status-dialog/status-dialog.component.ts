import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { StatusService } from '../../service/status.service';
import { Status } from '../../model/status.model';
@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Status,
    public statusService: StatusService  ) { }

  ngOnInit(): void {
  }
  public add(): void {
    this.statusService.addStatus(this.data);
    this.snackBar.open('Uspesno dodat status ' + this.data.naziv, 'U redu', {duration: 2000} );
  }

  public update(): void {
    this.statusService.updateStatus(this.data);
    this.snackBar.open('Uspesno izmenjen status ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public delete(): void{
    this.statusService.deleteStatus(this.data.id);
    this.snackBar.open('Uspesno obrisan status ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public cancel(): void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {duration:2000});
  }

}
