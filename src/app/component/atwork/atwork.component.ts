import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesPageService } from 'src/app/services/services-page.service';

@Component({
  selector: 'app-atwork',
  templateUrl: './atwork.component.html',
  styleUrls: ['./atwork.component.css']
})
export class AtworkComponent implements OnInit {
   
  @ViewChild('rangedoloor') rangedoloor!: ElementRef;

  constructor(private scrollService: ServicesPageService,
  ) {}



  
  yourMany = 50
  inputRange1: any = 1000
  inputRange2 = 5

 

  onNavClick(event: Event, elementId: string): void {
    event.preventDefault();
    this.scrollService.scrollToElement(elementId);
  }
 
 
  displayValue: string = ""
 
    resultFunction() {
     this.yourMany = Math.round(this.inputRange1 * (this.inputRange2 / 100))
   
     if (+this.inputRange1 > 900000) {
       this.inputRange1 = 900000
      this.yourMany =  Math.round( 900000 * (this.inputRange2 / 100))
     }
  
     if (+this.inputRange1 < 1000) {
       this.inputRange1 = 1000
       this.yourMany = Math.round(this.inputRange1 * (this.inputRange2 / 100))

     }
 
 
     if (+this.inputRange2 > 20) {
       this.inputRange2 = 20
       this.yourMany = Math.round( this.inputRange1 * (20 / 100))
     }
 
     if (+this.inputRange2 < 5) {
       this.inputRange2 = 5
       this.yourMany = Math.round( this.inputRange1 * (5 / 100)) 
     }
 
    }
 
 
 
    ngOnInit(): void {
      console.log("gogo")
    }

}
