import { Component, inject } from '@angular/core';
import { investmentResultDataType } from '../model/investmentdata.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService  = inject(InvestmentService)
  get results() {
    return this.investmentService.results;
  }
}
