import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInputDataType } from '../model/user-input.model';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '5';

  private investmentService = inject(InvestmentService)

  onCalculateInvestment() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment : parseInt(this.initialInvestment),
      annualInvestment : parseInt(this.annualInvestment),
      expectedReturn : parseInt(this.expectedReturn),
      duration : parseInt(this.duration)
    });
    this.annualInvestment = '0';
    this.duration = '5';
    this.expectedReturn = '5';
    this.initialInvestment = '0';
  }
}
