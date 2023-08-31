import { Component, HostListener } from '@angular/core';
import { projectText } from './projects-text';
import { MatDialog } from '@angular/material/dialog';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';
import { ProjectTextComponent } from 'src/app/ui/project-text/project-text.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../portfolio/portfolio.component.css', '../../app.component.scss']
})
export class ProjectsComponent {
  texts = projectText;

  constructor(public dialog: MatDialog, private globalService: GlobalVariablesService) { this.globalService.setTheme("blue") }

  openText(songName: string) {
    const myText = this.texts.find(item => item.name === songName);

    let dialogRef = this.dialog.open(ProjectTextComponent, {
      data: { name: myText?.name, text: myText?.text, link: myText?.link }
    });
  }
}