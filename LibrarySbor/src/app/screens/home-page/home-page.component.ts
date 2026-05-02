import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  slidesInfo: { image: string; title: string }[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.slidesInfo.push({ image: "assets/images/slide-home-1.jpg", title: "Паметника" });
    this.slidesInfo.push({ image: "assets/images/slide-home-2.jpg", title: "Читалището" });
    this.slidesInfo.push({ image: "assets/images/slide-home-3.jpg", title: "Читалището" });
    this.slidesInfo.push({ image: "assets/images/slide-home-4.jpg", title: "Кметството" });
  }
}
