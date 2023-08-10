import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
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
export class PortfolioComponent {
  innerHeight: number = window.innerHeight;
  fadeElmVisible: boolean = true;
  tab = "Web Front";

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.2,
    };

    const observerFade = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('invisible');
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.add('invisible');
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    const myFades = document.querySelectorAll('.fadeElm');

    myFades.forEach(element => {
      if (element.id !== '') {
        this.addFadeObserver(element.id)
      }
      else {
        observerFade.observe(element);
      }
    });

  }

  switchTab(event: { target: any; }) {
    const tabElement = event.target;

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Obtenez la position de défilement verticale actuelle de la page

    const content = document.getElementById("content")
    const stickyDiv = document.getElementById("stickyDiv")

    var delta = 0;

    if (content && stickyDiv) {
      delta = stickyDiv.offsetTop - content.offsetTop
    }

    if (window.innerWidth > 870) {
      if (this.fadeElmVisible !== window.scrollY < 1 * window.innerHeight && this.fadeElmVisible) {
        this.removeFadeObserver('tab-experience');
      }
      else if (this.fadeElmVisible !== window.scrollY < 1 * window.innerHeight && !this.fadeElmVisible) {
        this.addFadeObserver('tab-experience');
      }
      this.fadeElmVisible = window.scrollY < 1 * window.innerHeight;

      const myTab = document.getElementById("tab-experience")

      const myWidth = 60 + ((delta / (0.5 * window.innerHeight)) * 40)

      if (myTab) {
        document.documentElement.style.setProperty('--experience-width', myWidth + '%');
        console.log(myWidth)
      }
    }
    else {
      this.removeFadeObserver('tab-experience');
    }

  }

  fadeObservers: Map<string, IntersectionObserver> = new Map();

  addFadeObserver(myId: string) {
    const element = document.getElementById(myId);
    if (element) {
      const options = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.2,
      };

      const observerFade = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.add('invisible');
            entry.target.classList.remove('visible');
          }
        });
      }, options);

      observerFade.observe(element);
      this.fadeObservers.set(myId, observerFade); // Store the observer in the map
    }
  }

  removeFadeObserver(myId: string) {
    const observer = this.fadeObservers.get(myId);
    if (observer) {
      observer.disconnect(); // Disconnect the observer
      this.fadeObservers.delete(myId); // Remove the observer from the map
    }
  }

}
