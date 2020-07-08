import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeheadComponent } from './typehead.component';

describe('TypeheadComponent', () => {
  let component: TypeheadComponent;
  let fixture: ComponentFixture<TypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
