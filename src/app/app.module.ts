import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule,MatGridListModule,MatCardModule } from '@angular/material';
import {ParticlesModule} from 'angular-particle';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PortfolioComponent,
    ContactComponent
  ], 
    imports: [
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatGridListModule,
      MatTabsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
