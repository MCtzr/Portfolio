import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FadeEffectService {

  fadeObservers: Map<string, IntersectionObserver> = new Map();

  setObserverFade() {
    const options = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.2,
    };

    console.log("test")

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
