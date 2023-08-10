import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from './components/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matéo CONDAT';

  theme: string = 'rgb(10, 13, 22)';
  isScrollable: string = "auto"
  subscription!: Subscription;
  subscription2!: Subscription;

  constructor(private globalService: GlobalVariablesService) { }

  ngOnInit() {
    // Souscrire à l'observable theme$ du service pour mettre à jour la variable theme
    this.subscription = this.globalService.theme$.subscribe(theme => {
      if (theme == "brown") {
        this.theme = 'rgb(10,6,2)';
      } else if (theme == "blue") {
        this.theme = 'rgb(10, 13, 22)';
      }
      // Définir le CSS de l'élément body en fonction de la variable theme
      document.documentElement.style.setProperty('--theme', this.theme);
    });

    this.subscription2 = this.globalService.isScrollable$.subscribe(isScrollable => {
      if (isScrollable == true) {
        this.isScrollable = "auto";
      } else {
        this.isScrollable = "hidden";
      }
      // Définir le CSS de l'élément body en fonction de la variable theme
      document.documentElement.style.setProperty('--isScrollable', this.isScrollable);
    })
  }

  ngOnDestroy() {
    // N'oubliez pas de désabonner la souscription pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
