import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtScreenComponent } from './debt-screen.component';

describe('DebtScreenComponent', () => {
  let component: DebtScreenComponent;
  let fixture: ComponentFixture<DebtScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
