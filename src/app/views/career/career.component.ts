import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss', '../portfolio/portfolio.component.css', '../../app.component.scss']
})
export class CareerComponent {
  tabTimeline = "highschool-cercle";

  switchTab(id: string) {
    const clickedTab = document.querySelector(`[data-id="${id}"]`) as SVGCircleElement;

    this.tabTimeline = id;

    console.log(id)

    // Sélectionne tous les éléments ayant la classe "tab-header-elm"
    const allTabs = document.querySelectorAll('.cercle');

    // Retire la classe "active" à tous les éléments ayant la classe "tab-header-elm"
    allTabs.forEach(tab => tab.classList.remove('cercle-active'));

    // Retire la classe "active" à tous les éléments ayant la classe "tab-header-elm"
    allTabs.forEach(tab => tab.classList.add('cercle-passive'));

    if (clickedTab) {
      clickedTab.classList.add('cercle-active');
      clickedTab.classList.remove('cercle-passive');
    }

  }
}
