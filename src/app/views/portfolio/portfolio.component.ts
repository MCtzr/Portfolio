import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FadeEffectService } from 'src/app/components/fade-effect.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', '../../app.component.scss'],
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
  scrollValue: number = 0;

  constructor(private FadeEffectService: FadeEffectService) { }

  ngAfterViewInit() {
    this.FadeEffectService.setObserverFade();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    document.documentElement.style.setProperty('--scroll-value', window.scrollY + "px");
    if (window.scrollY > 350 && window.scrollY < this.innerHeight) {
      document.documentElement.style.setProperty('--scroll-value-context', (10 * 1000 ** 5 / (window.scrollY ** 5)) + "px");
    }
    else if (window.scrollY <= this.innerHeight / 3) {
      document.documentElement.style.setProperty('--scroll-value-context', (window.innerWidth + "px"));
    }
    else {
      document.documentElement.style.setProperty('--scroll-value-context', (0 + "px"));
    }

    // Obtenez la position de défilement verticale actuelle de la page

    const content = document.getElementById("content")
    const stickyDiv = document.getElementById("stickyDiv")

    var delta = 0;

    if (content && stickyDiv) {
      delta = stickyDiv.offsetTop - content.offsetTop
    }

    if (window.innerWidth > 870) {
      if (this.fadeElmVisible !== window.scrollY < 1 * window.innerHeight && this.fadeElmVisible) {
        this.FadeEffectService.removeFadeObserver('first-container');
      }
      else if (this.fadeElmVisible !== window.scrollY < 1 * window.innerHeight && !this.fadeElmVisible) {
        this.FadeEffectService.addFadeObserver('first-container');
      }
      this.fadeElmVisible = window.scrollY < 1 * window.innerHeight;

      const myTab = document.getElementById("first-container")

      const myWidth = 60 + ((delta / (0.5 * window.innerHeight)) * 40)

      if (myTab) {
        document.documentElement.style.setProperty('--experience-width', myWidth + '%');
      }
    }
    else {
      this.FadeEffectService.removeFadeObserver('first-container');
    }

  }
}
