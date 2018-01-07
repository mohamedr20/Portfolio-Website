import { Component, OnInit } from '@angular/core';
import {PortfolioItem} from './portfolio-item'
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio_items:PortfolioItem[]
  constructor() {
    this.portfolio_items = [
      new PortfolioItem('./assets/bitcoin.png','Angular BitCoin Charts','Angular 4+ App',`This was a project I started to develop because I was intrested in monitoring 
      how BitCoin was doing admist all the hype. The app was developed with Angular
      and used custom SCSS design I created.The application uses the AlphaVantage API
      for it's data and Ng-Charts2 for the data visualization.`),
      new PortfolioItem('./assets/nba-angular.png','Nba Angular','Angular 4+ App',`
      This was a fun personal project in which I was able to use quite a few technologies I was intrested in.
      The authentication was done with AngularFireStore and the app was designed using Angular Material Design.
      Data was fetched from the SportFeedApi and displayed on Angular Material Data Tables.
      `)
    ]
   }

  ngOnInit() {
  }

}
