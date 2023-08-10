import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';
import { Subscription } from 'rxjs';

interface NavbarToggle {
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  previousScrollY = window.scrollY;


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const currentScrollY = window.scrollY;
    const navbar = document.getElementById("navbar")


    if (currentScrollY > this.previousScrollY) {
      if (navbar) {
        navbar.style.top = '-60px';
      }
    } else {
      if (navbar) {
        navbar.style.top = '-5px';
      }
    }

    this.previousScrollY = currentScrollY;
  }

  scrollTo(divId: string) {
    const targetElement = document.getElementById(divId);

    var stickyDelta = 0

    if (targetElement) {
      if (divId === "projects" && window.innerWidth > 871) {
        stickyDelta = 0.5 * window.innerHeight
      }
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + stickyDelta + 1;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  email: string = "matcitizer@gmail.com";

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.email;
    document.body.appendChild(el);
    el.select();
    document.execCommand(' My CV ');
    document.body.removeChild(el);
    const bouton = document.getElementById("emailButton") as HTMLButtonElement;
    bouton.innerHTML = "Downloaded"
  }

  changeBackText() {
    const bouton = document.getElementById("emailButton") as HTMLButtonElement;
    bouton.innerHTML = " My CV "
  }
}