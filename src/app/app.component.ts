import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from './components/global-variables.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), // Opacité initiale à 0
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Matéo CONDAT';
  constructor(private translate: TranslateService) {
    // Définir la langue par défaut
    this.translate.setDefaultLang('fr');

    // Utiliser la langue par défaut ou détecter celle de l'utilisateur
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/fr|en/) ? browserLang : 'fr');
  }
}
