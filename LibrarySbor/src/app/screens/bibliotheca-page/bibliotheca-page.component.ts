import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bibliotheca-page',
  templateUrl: './bibliotheca-page.component.html',
  styleUrls: ['./bibliotheca-page.component.css']
})
export class BibliothecaPageComponent implements OnInit {
  sliderInfo: { image: string, title: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.sliderInfo.push({image: "assets/images/slider-bib-1.JPG", title: "Библиотеката отвътре"});
    this.sliderInfo.push({image: "assets/images/slider-bib-2.JPG", title: "Библиотеката отвън"});
    this.sliderInfo.push({image: "assets/images/slider-bib-3.JPG", title: "Книги в библиотеката"});
  }

}
