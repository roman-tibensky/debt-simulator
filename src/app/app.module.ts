import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DebtScreenComponent } from './debt-screen/debt-screen.component';
import { IncomeViewComponent } from './income-view/income-view.component';
import { FinanceViewComponent } from './finance-view/finance-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import  {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIcon,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';

import { FinancesService } from './finances.service';

@NgModule({
  declarations: [
    AppComponent,
    DebtScreenComponent,
    IncomeViewComponent,
    FinanceViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatNativeDateModule,
    FlexLayoutModule
  ],
  providers: [FinancesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
