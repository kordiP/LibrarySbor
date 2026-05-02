import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-sliding',
  templateUrl: './carousel-sliding.component.html',
  styleUrls: ['./carousel-sliding.component.css']
})
export class CarouselSlidingComponent implements OnInit {
  @Input() slidesInfo: { image: string, title: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}
