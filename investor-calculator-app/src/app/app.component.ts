<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { userInputDataType } from './model/user-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { investmentResultDataType } from './model/investmentdata.model';
import { InvestmentService } from './service/investment.service';
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
>>>>>>> b86c9de1bcd9e45cfeb6f62751d4389aab126483

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
=======
  imports: [RouterOutlet],
>>>>>>> b86c9de1bcd9e45cfeb6f62751d4389aab126483
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD

=======
  title = 'investor-calculator-app';
>>>>>>> b86c9de1bcd9e45cfeb6f62751d4389aab126483
}
