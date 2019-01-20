import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {
  debt = 0;
  income = 0;
  clickMultiplier = 0;
  periodicIncome = 0;
  debtPeriod: any;
  incomePeriod: any;
  gameOn = false;

  constructor() { }

  resetGame() {
    this.gameOn = true;
    this.debt = 100000;
    this.income = 0;
    this.clickMultiplier = 15000;
    this.periodicIncome = 0;
    if (this.debtPeriod) { clearInterval(this.debtPeriod); }
    if (this.incomePeriod) { clearInterval(this.incomePeriod); }
    this.debtPeriod = setInterval(() => { this.monthlyDebt(); }, 30000);
    this.incomePeriod = setInterval(() => { this.weeklyIncome(); }, 7000);
  }

  changeDebt(debtDelta) {
    if (-this.debt < debtDelta) {
      this.debt += debtDelta;
    } else {
      this.debt = 0;
    }
  }

  changeIncome(incomeDelta) {
    this.income += incomeDelta;
  }

  monthlyDebt(): any {
    this.debt += Math.floor(this.debt * 0.08);
  }

  weeklyIncome(): any {
    this.income += this.periodicIncome = 0;
  }

}
