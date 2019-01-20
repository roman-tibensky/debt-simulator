import { Component, OnInit } from '@angular/core';
import { FinancesService } from '../finances.service';

@Component({
  selector: 'debt-screen',
  templateUrl: './debt-screen.component.html',
  styleUrls: ['./debt-screen.component.css']
})
export class DebtScreenComponent implements OnInit {

  constructor(private finance: FinancesService) { }

  ngOnInit() {
  }

}
