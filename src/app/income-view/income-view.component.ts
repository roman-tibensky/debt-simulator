import { Component, OnInit } from '@angular/core';
import {FinancesService} from '../finances.service';

@Component({
  selector: 'income-view',
  templateUrl: './income-view.component.html',
  styleUrls: ['./income-view.component.css']
})
export class IncomeViewComponent implements OnInit {

  constructor(private finance: FinancesService) { }

  ngOnInit() {
  }

  earnMoney() {
    this.finance.changeIncome(this.finance.clickMultiplier)
  }

}
