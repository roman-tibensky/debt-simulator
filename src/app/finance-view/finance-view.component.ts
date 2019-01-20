import { Component, OnInit } from '@angular/core';
import { FinancesService } from '../finances.service';


@Component({
  selector: 'finance-view',
  templateUrl: './finance-view.component.html',
  styleUrls: ['./finance-view.component.css']
})
export class FinanceViewComponent implements OnInit {

  constructor(private finance: FinancesService) { }

  ngOnInit() {
  }

  resetGame() {
    console.log('start');
    this.finance.resetGame();
  }

  payDebt(amount) {
    if (this.finance.income >= amount) {
      this.finance.changeIncome(-amount);
      this.finance.changeDebt(-amount);
    }
  }

  debtIncome(payment): number {
    return payment > this.finance.debt ? this.finance.debt : payment;
  }

}
