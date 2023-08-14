import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, NgZone, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  email = "condatmateo@gmail.com";

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('Copy');
    document.body.removeChild(el);
    const bouton = document.getElementById("emailButton") as HTMLButtonElement;
    bouton.innerHTML = "Copied"
  }

  changeBackText() {
    const bouton = document.getElementById("emailButton") as HTMLButtonElement;
    bouton.innerHTML = " Copy "
  }

}
