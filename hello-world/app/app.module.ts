import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';  // new added
import { CoursesService } from './courses.service';

import { DataComponent } from './data.component';
import { PipesComponent } from './pipes.component';

import { BootComponent } from './bootstrap.component';

import { FormsModule } from '@angular/forms';

import { CustomPipe } from './custom.component';

import { InputOutputComponent } from './inputoutput.component';

import { DirectivesComponent } from './directives.component';
import { FormComponent } from './form.component';

import { HTTPServiceComponent } from './httpservice.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    DataComponent,
    BootComponent,
    PipesComponent,
    CustomPipe,
    InputOutputComponent,
    DirectivesComponent,
    FormComponent,
    HTTPServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
