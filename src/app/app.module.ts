import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './ui/footer/footer.component';
import { StarBackgroundComponent } from './ui/star-background/star-background.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './ui/navbar/navbar/navbar.component';
import { PresentationComponent } from './views/presentation/presentation.component';
import { TabExperienceComponent } from './views/tab-experience/tab-experience.component';
import { CareerComponent } from './views/career/career.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContextComponent } from './views/context/context.component';
import { ProjectTextComponent } from './ui/project-text/project-text.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatDialogModule } from '@angular/material/dialog';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ContextComponent,
    ProjectTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
