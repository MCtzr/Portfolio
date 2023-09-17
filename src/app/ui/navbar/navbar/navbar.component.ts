import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  previousScrollY = window.scrollY;
  isScrolling = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const currentScrollY = window.scrollY;
    const navbar = document.getElementById("navbar")

    if (currentScrollY > this.previousScrollY || this.isScrolling !== false) {
      if (navbar) {
        navbar.style.top = '-60px';
      }
    }
    else {
      if (navbar) {
        navbar.style.top = '-1px';
      }
    }
    this.previousScrollY = currentScrollY;
  }

  scrollTo(divId: string) {
    const targetElement = document.getElementById(divId);

    var stickyDelta = 0

    if (targetElement) {
      if (divId !== "presentation" && window.innerWidth > 871 && window.scrollY < 900) {
        stickyDelta = 0.5 * window.innerHeight
      }
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + stickyDelta + 1;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      this.setIsScrolling(true);

      setTimeout(() => {
        this.setIsScrolling(false);
      }, 1500);
    }
  }

  setIsScrolling(value: boolean) {
    this.isScrolling = value;
  }
}
