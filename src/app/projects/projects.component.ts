import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any;  

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('myCarousel') myCarousel!: ElementRef;  // Reference to the Carousel element in the template

  ngAfterViewInit() {
    new bootstrap.Carousel(this.myCarousel.nativeElement, {
      interval: 2000,
      touch: true
    });
  }
}
