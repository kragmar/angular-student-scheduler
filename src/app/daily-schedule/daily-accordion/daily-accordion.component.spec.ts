import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAccordionComponent } from './daily-accordion.component';

describe('DailyAccordionComponent', () => {
  let component: DailyAccordionComponent;
  let fixture: ComponentFixture<DailyAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
