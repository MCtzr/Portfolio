import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';

@Component({
  selector: 'app-project-text',
  templateUrl: './project-text.component.html',
  styleUrls: ['./project-text.component.css']
})
export class ProjectTextComponent {
  collaborators: string | undefined;
  content: string | undefined;
  name: string | undefined;
  endDate: string | undefined;
  link: string | undefined;
  skills: string | undefined;
  tools: string | undefined;
  duration: string | undefined;
  theme: string = 'rgb(10, 13, 22)';
  subscription!: Subscription;



  constructor(
    public dialogRef: MatDialogRef<ProjectTextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private globalService: GlobalVariablesService,
    private renderer: Renderer2, private elementRef: ElementRef
  ) {
    this.collaborators = data.collaborators
    this.content = data.content
    this.name = data.name
    this.endDate = data.endDate
    this.link = data.link
    this.skills = data.skills
    this.tools = data.tools
    this.duration = data.duration

    if (data.link != "") {
      this.link = data.link
    }
  }

  ngOnInit() {
    const overlayElement = this.elementRef.nativeElement.querySelector('#cdk-overlay-0');
    this.renderer.setStyle(overlayElement, 'max-width', 'none'); // Essayez 'none' ou 'unset'
  }

  close() {
    this.dialogRef.close();
  }
}
