import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { StatusComponent } from './status/status.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { DepartmanComponent } from './departman/departman.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component'
@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    FakultetComponent,
    DepartmanComponent,
    StudentComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
