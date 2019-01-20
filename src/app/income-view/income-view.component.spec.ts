import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeViewComponent } from './income-view.component';

describe('IncomeViewComponent', () => {
  let component: IncomeViewComponent;
  let fixture: ComponentFixture<IncomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
