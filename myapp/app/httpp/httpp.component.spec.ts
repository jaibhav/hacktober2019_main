import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppComponent } from './httpp.component';

describe('HttppComponent', () => {
  let component: HttppComponent;
  let fixture: ComponentFixture<HttppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
