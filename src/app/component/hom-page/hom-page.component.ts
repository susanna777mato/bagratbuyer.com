import { Component } from '@angular/core';
import { ServicesPageService } from 'src/app/services/services-page.service';

@Component({
  selector: 'app-hom-page',
  templateUrl: './hom-page.component.html',
  styleUrls: ['./hom-page.component.css']
})
export class HomPageComponent {
  constructor(private scrollService: ServicesPageService) {}

  onNavClick(event: Event, elementId: string): void {
    event.preventDefault();
    this.scrollService.scrollToElement(elementId);
  }

  isMenuOpen = false; toggleMenu() { this.isMenuOpen = !this.isMenuOpen; } 

}
