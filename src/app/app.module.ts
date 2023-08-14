import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './ui/footer/footer.component';
import { StarBackgroundComponent } from './ui/star-background/star-background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './ui/navbar/navbar/navbar.component';
import { PresentationComponent } from './views/presentation/presentation.component';
import { TabExperienceComponent } from './views/tab-experience/tab-experience.component';
import { CareerComponent } from './views/career/career.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContextComponent } from './views/context/context.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StarBackgroundComponent,
    PortfolioComponent,
    NavbarComponent,
    PresentationComponent,
    TabExperienceComponent,
    CareerComponent,
    ProjectsComponent,
    ContextComponent
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
