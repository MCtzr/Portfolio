import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './ui/footer/footer.component';
import { StarBackgroundComponent } from './ui/star-background/star-background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticatorComponent } from './components/authenticator/authenticator.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './ui/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StarBackgroundComponent,
    PortfolioComponent,
    AuthenticatorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
