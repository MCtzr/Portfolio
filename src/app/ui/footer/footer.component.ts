import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, NgZone, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  email: string = "matcitizer@gmail.com";

  copyToClipboard() {

  }

  changeBackText() {

  }

}
