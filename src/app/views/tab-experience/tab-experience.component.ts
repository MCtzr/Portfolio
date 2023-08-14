import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-experience',
  templateUrl: './tab-experience.component.html',
  styleUrls: ['./tab-experience.component.css', '../../app.component.scss'],
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
export class TabExperienceComponent {

  tab = "Web Front";

  constructor() { }

  switchTab(event: { target: any; }) {
    const clickedTab = event.target; // Élément de l'onglet cliqué
    const contentId = clickedTab.dataset.content; // Récupère l'identifiant du contenu associé

    this.tab = contentId;

    // Sélectionne tous les éléments ayant la classe "tab-header-elm"
    const allTabs = document.querySelectorAll('.tab-header-elm');

    // Retire la classe "active" à tous les éléments ayant la classe "tab-header-elm"
    allTabs.forEach(tab => tab.classList.remove('tab-header-elm-active'));

    // Retire la classe "active" à tous les éléments ayant la classe "tab-header-elm"
    allTabs.forEach(tab => tab.classList.add('tab-header-elm-passive'));

    clickedTab.classList.add('tab-header-elm-active');
    clickedTab.classList.remove('tab-header-elm-passive');
  }


}
