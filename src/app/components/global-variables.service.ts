import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GlobalVariablesService {
  private themeSource = new Subject<string>();
  private isScollableSource = new Subject<boolean>();
  theme$ = this.themeSource.asObservable();
  isScrollable$ = this.isScollableSource.asObservable()

  setTheme(value: string) {
    this.theme = value;
    this.themeSource.next(value);
  }

  setIsScrollable(value: boolean) {
    this.isScrollable = value;
    this.isScollableSource.next(value);
  }

  // Valeur initiale
  theme: string = 'brown';
  isScrollable: boolean = true;
}