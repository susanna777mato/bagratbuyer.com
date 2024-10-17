import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {

  constructor() {}
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
