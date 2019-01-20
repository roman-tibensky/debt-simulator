import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceViewComponent } from './finance-view.component';

describe('FinanceViewComponent', () => {
  let component: FinanceViewComponent;
  let fixture: ComponentFixture<FinanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
