import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  @ViewChild('sidebarElement') sidebar: ElementRef;
  accordionExpandedStepNumber = 1;

  /**
   * @param step: number, step to be open
   * This function is used to open the card at selected step and collapse others.
   */
  toggleAccordion(step: number) {
    this.accordionExpandedStepNumber = step;
  }

  /**
   * This function is used to open the sidebar and make its width 100%.
   */
  openSidebar() {
    this.sidebar.nativeElement.style.width = '100%';
  }

  /**
   * This function is used to close the sidebar and make its width 0%.
   */
  closeSidebar() {
    this.sidebar.nativeElement.style.width = '0%';
  }

}
