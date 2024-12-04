import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { userInputDataType } from './model/user-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { investmentResultDataType } from './model/investmentdata.model';
import { InvestmentService } from './service/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
