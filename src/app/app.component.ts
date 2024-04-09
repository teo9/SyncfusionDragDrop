import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from "@angular/core";
import { Draggable, Droppable } from "@syncfusion/ej2-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  @ViewChild('dashboard', { static: true }) dashboard!: ElementRef;
   
  ngAfterViewInit() { 

    setTimeout(() => {
      new Draggable(document.getElementById("ElementToDrag_1") as HTMLElement, { clone: true });
      new Draggable(document.getElementById("ElementToDrag_2") as HTMLElement, { clone: true });
      new Draggable(document.getElementById("ElementToDrag_3") as HTMLElement, { clone: true });

      new Droppable(this.dashboard.nativeElement);

    });
  } 
}
