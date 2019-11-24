import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfrmComponent } from './myfrm.component';

describe('MyfrmComponent', () => {
  let component: MyfrmComponent;
  let fixture: ComponentFixture<MyfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
