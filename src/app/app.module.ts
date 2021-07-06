import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog'
import { StatusComponent } from './status/status.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DepartmanComponent } from './departman/departman.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StatusService } from './service/status.service';
import { StatusDialogComponent } from './dialog/status-dialog/status-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FakultetComponent } from './fakultet/fakultet.component';
import { FakultetDialogComponent } from './dialog/fakultet-dialog/fakultet-dialog.component';
import { FakultetService } from './service/fakultet.service';
import { DepartmanService } from './service/departman.service';
import { DepartmanDialogComponent } from './dialog/departman-dialog/departman-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { StudentDialogComponent } from './dialog/student-dialog/student-dialog.component';
import { StudentService } from './service/student.service';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const Routes = [{path: 'status', component: StatusComponent},
{path: 'fakultet', component: FakultetComponent},
{path: 'departman', component: DepartmanComponent},
 {path: 'student', component: StudentComponent},
  {path: 'home', component: HomeComponent},
{path: 'author', component: AuthorComponent},
 {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    FakultetComponent,
    DepartmanComponent,
    StudentComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    StatusDialogComponent,
    FakultetDialogComponent,
    DepartmanDialogComponent,
    StudentDialogComponent,

    ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [StatusService, FakultetService, DepartmanService, StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
