import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { AuthenticatorComponent } from './components/authenticator/authenticator.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
