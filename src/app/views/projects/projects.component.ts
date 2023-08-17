import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../portfolio/portfolio.component.css', '../../app.component.scss']
})
export class ProjectsComponent {

  navigationStream = document.getElementById("portfolio-project") as HTMLDivElement;

  updateNavigationStream(action: string) {
    const actionElement = document.createElement("p");
    actionElement.textContent = action;
    this.navigationStream.appendChild(actionElement);
    this.navigationStream.scrollTop = this.navigationStream.scrollHeight;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavigationStream("Défilement de la page");
  };

  @HostListener('window:click', [])
  onWindowClic() {
    this.updateNavigationStream("Clic sur la page");
  };

  // Exemple d'utilisation de la méthode scrollTo
  scrollTo(divId: string) {
    // Votre logique pour faire défiler vers l'élément cible

    this.updateNavigationStream(`Défilement vers ${divId}`);
  }
}