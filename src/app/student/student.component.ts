import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortHeaderIntl } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { StudentDialogComponent } from '../dialog/student-dialog/student-dialog.component';
import { Departman } from '../model/departman.model';
import { Status } from '../model/status.model';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns = ['id', 'status', 'departman', 'brojIndeksa', 'ime', 'prezime', 'actions'];

  //dataSource: Observable<Student[]>;
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  @Input()
  selektovanStatus: Status;

  constructor(public studentService: StudentService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }
  ngOnChanges(){
    if (this.selektovanStatus.id){
      this.loadData();
    }
  }
  public loadData(){
    //this.dataSource = this.studentService.getAllStudent();

    //this.studentService.getOnestudent(this.selektovanStatus.id) NE RADI, ne pojavljuju se rezultati, kod je 200, ali nista se ne prikazuje
    //this.studentService.getAllStudent() radi bez problema i prikazuje sve studente, uz mogucnost pretrage i sortiranja
    this.studentService.getOneStudent(this.selektovanStatus.id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id' : return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  public openDialog(flag: number, id: number, status:Status, departman: Departman, brojIndeksa:string, ime: string, prezime:string){
    const dialog = this.dialog.open(StudentDialogComponent, {data:
      {id: id, status:status, departman:departman, brojIndeksa:brojIndeksa, ime: ime, prezime: prezime}});
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
