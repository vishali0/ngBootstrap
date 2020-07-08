import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AacordionComponent } from './aacordion.component';

describe('AacordionComponent', () => {
  let component: AacordionComponent;
  let fixture: ComponentFixture<AacordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AacordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AacordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
