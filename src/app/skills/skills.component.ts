import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any;  

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('myCarousel') myCarousel!: ElementRef; 

  ngAfterViewInit() {
    new bootstrap.Carousel(this.myCarousel.nativeElement, {
      interval: 2000,
      touch: true
    });
  }
}
