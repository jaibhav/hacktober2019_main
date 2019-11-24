import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GradesComponent } from './grades/grades.component';
import { DateSheetComponent } from './datesheet/datesheet.component';
import { RouterModule} from '@angular/router';
@NgModule({
   declarations: [
      AppComponent,
      GradesComponent,
	  DateSheetComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         {
            path: '',
            component: AppComponent
         },
		 {
            path: 'grades',
            component: GradesComponent
         },
		 {
            path: 'datesheet',
            component: DateSheetComponent
         }
      ])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
