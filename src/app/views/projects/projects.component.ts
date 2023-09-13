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

  constructor(public dialog: MatDialog, private globalService: GlobalVariablesService) {
    this.globalService.setTheme("blue");

  }

  ngOnInit() {
    this.setObserverFade();
  }

  openText(projectName: string) {
    const myText = this.texts.find(item => item.Name === projectName);

    let dialogRef = this.dialog.open(ProjectTextComponent, {
      maxWidth: 'none',
      minWidth: '80vw',

      data: { name: myText?.Name, content: myText?.Content, link: myText?.Link, collaborators: myText?.Collaborators, duration: myText?.Duration, endDate: myText?.EndDate, skills: myText?.SkillsApplied, tools: myText?.Tools }
    });
  }

  setObserverFade() {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.2,
    };

    const observerFade = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('invisible-project');
          entry.target.classList.add('visible-project');
        } else {
          entry.target.classList.add('invisible-project');
          entry.target.classList.remove('visible-project');
        }
      });
    }, options);

    const myFades = document.querySelectorAll('.fadeProject');

    myFades.forEach(element => {
      observerFade.observe(element);
    });

  }
}