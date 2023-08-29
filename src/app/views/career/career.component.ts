import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss', '../portfolio/portfolio.component.css', '../../app.component.scss']
})
export class CareerComponent {
  tabTimeline = "";

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    if (window.innerWidth > 1500) {
      this.tabTimeline = "highschool-cercle";
      const clickedTab = document.querySelector(`[data-id="highschool-cercle"]`) as SVGCircleElement;

      if (clickedTab) {
        clickedTab.classList.add('cercle-active');
        clickedTab.classList.remove('cercle-passive');
      }
    }
  }

  switchTab(id: string) {
    const clickedTab = document.querySelector(`[data-id="${id}"]`) as SVGCircleElement;

    this.tabTimeline = id;

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

  removeTab() {
    // Sélectionne tous les éléments ayant la classe "tab-header-elm"
    const allTabs = document.querySelectorAll('.cercle');

    // Retire la classe "active" à tous les éléments ayant la classe "tab-header-elm"
    allTabs.forEach(tab => tab.classList.remove('cercle-active'));

    // Retire la classe "active" à tous les éléments ayant la classe "tab-header-elm"
    allTabs.forEach(tab => tab.classList.add('cercle-passive'));

    this.tabTimeline = "";
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {

    const children = this.el.nativeElement.querySelectorAll('.content-element');

    if (children) {
      children.forEach((childRef: any) => {

        const parent = this.el.nativeElement.querySelector('.content-background');

        const child = childRef;

        const marginY = (window.innerHeight - child.clientHeight) / 2;

        const parentRect = parent.getBoundingClientRect();
        const contentElementRect = child.getBoundingClientRect();

        if (0 < parentRect.top) {
          child.style.position = 'absolute';
          child.style.top = marginY + "px";
          console.log("top")
        }
        else if (child.clientHeight + 2 * marginY > parentRect.bottom) {
          child.style.position = 'absolute';
          child.style.top = "auto";
          child.style.bottom = marginY + "px";
          console.log("bot")
        }
        else {
          child.style.position = 'fixed';
          child.style.top = marginY + "px";
          console.log("fixed")
        }

        console.log("parentRect.bottom = " + parentRect.top)

      })
    }

  }

}
