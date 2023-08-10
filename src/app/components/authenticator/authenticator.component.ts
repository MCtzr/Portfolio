import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements CanActivate {
  private password = '123456789';

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const enteredPassword = prompt('Veuillez entrer le mot de passe :');

    if (enteredPassword === this.password) {
      return true; // Accès autorisé
    } else {
      this.router.navigate(['/']); // Redirige vers la page d'accueil ou une autre page en cas d'accès refusé.
      return false;
    }
  }
}