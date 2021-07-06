import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Departman } from 'src/app/model/departman.model';
import { Fakultet } from 'src/app/model/fakultet.model';
import { DepartmanService } from 'src/app/service/departman.service';
import { FakultetService } from '../../service/fakultet.service';

@Component({
  selector: 'app-departman-dialog',
  templateUrl: './departman-dialog.component.html',
  styleUrls: ['./departman-dialog.component.css']
})
export class DepartmanDialogComponent implements OnInit {

  public flag: number;

  fakulteti: Fakultet[];
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DepartmanDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Departman,
    public departmanService: DepartmanService,
    public fakultetService: FakultetService  ) { }

  ngOnInit(): void {
    this.fakultetService.getAllFakultet().subscribe(fakulteti =>
      this.fakulteti = fakulteti)
  }
  public add(): void {
    this.departmanService.addDepartman(this.data);
    this.snackBar.open('Uspesno dodat departman ' + this.data.naziv, 'U redu', {duration: 2000} );
  }

  public update(): void {
    this.departmanService.updateDepartman(this.data);
    this.snackBar.open('Uspesno izmenjen departman ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public delete(): void{
    this.departmanService.deleteDepartman(this.data.id);
    this.snackBar.open('Uspesno obrisan departman ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public cancel(): void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {duration:2000});
  }
  compareTo(a, b){
    return a.id === b.id;
  }
}

