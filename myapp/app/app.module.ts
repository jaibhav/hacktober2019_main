import {CoursesComponent} from './courses.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DepnService} from './depninj.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropComponent } from './prop.component';
import { CAP917} from './cap917.component';

import {MyComp} from './myComp.component';
import { MyCompoComponent } from './my-compo/my-compo.component';
import { ReqComponent } from './request.component';
import { InjClass } from './inj.component';
import { MyClass } from './inj.service';
import {PropImgComponent} from './prop_img.component';
import {AttrComponent} from './attr.component';
import {ClsComponent} from './cls.component';
import {StlComponent} from './style.component';
import { SttcStlComponent } from './sttc_style.component';
import {Evt3Component} from './evnt3.component';
import {TmpltComponent} from './templt.component';
import {TWBComponent} from './twb.component';
import { FormsModule } from '@angular/forms';
import { DrctvComponent } from './drctv.component';
import { ChkfrmComponent } from './myfrm/chk.component';
//import { SwtchComponent } from './swtch.component';
import { BtStrap } from './bootstrp.component';
import { MyfrmComponent } from './myfrm/myfrm.component';
import { SpcfcComponent } from './myfrm/spcfc.component';
import { NgModelGroupComp } from './myfrm/ngfrmgrp.component';
import { DisablComponent } from './myfrm/disabl.component';
import { DrpfrmComponent } from './myfrm/drpdwn.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/common/http';
import { HttppComponent } from './httpp/httpp.component';
@NgModule({
  declarations: [
    AppComponent,
	CoursesComponent,
	//CourseComponent, 
	MyComp, MyCompoComponent,
	CAP917,
	PropComponent,
	ReqComponent,
	InjClass, PropImgComponent,
	AttrComponent,ClsComponent,StlComponent,
	SttcStlComponent,
	Evt3Component,
	TmpltComponent,
	TWBComponent, 
	DrctvComponent,
	BtStrap,
	MyfrmComponent,
	SpcfcComponent,
	NgModelGroupComp,
	DisablComponent,
	ChkfrmComponent,
	DrpfrmComponent,
	HttppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpModule
  ],
  providers: [MyClass,Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
