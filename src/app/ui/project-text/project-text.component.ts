import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';

@Component({
  selector: 'app-project-text',
  templateUrl: './project-text.component.html',
  styleUrls: ['./project-text.component.css']
})
export class ProjectTextComponent {
  text: string | undefined;
  name: string | undefined;
  theme: string = 'rgb(10, 13, 22)';
  link: boolean = false;
  subscription!: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ProjectTextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private globalService: GlobalVariablesService,
  ) {
    this.text = data.text
    this.name = data.name

    if (data.link != "") {
      this.link = data.link
    }
  }

  ngOnInit() {
    // Souscrire à l'observable theme$ du service pour mettre à jour la variable theme
    this.subscription = this.globalService.theme$.subscribe(theme => {
      if (theme == "brown") {
        this.theme = 'rgb(10,6,2)';
      } else if (theme == "blue") {
        this.theme = 'rgb(10, 13, 22)';
      }
      // Définir le CSS de l'élément body en fonction de la variable theme
      document.documentElement.style.setProperty('--theme', this.theme);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
