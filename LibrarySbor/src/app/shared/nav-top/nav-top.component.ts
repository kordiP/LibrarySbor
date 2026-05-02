import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  isMenuOpen = false;
  activeIndex = -1;

  constructor() { }

  closeMenu() {
    this.isMenuOpen = false;
  }

  setActive(index: number) {
    this.activeIndex = index;
    this.closeMenu();
  }

  ngOnInit(): void {
    const fullUrl = window.location.href.split('/');
    const currScr = fullUrl[fullUrl.length - 1];

    switch (currScr) {
      case "Library":
        this.activeIndex = 0;
        break;
      case "Bibliotheca":
        this.activeIndex = 1;
        break;
      case "Contact":
        this.activeIndex = 2;
        break;
      default:
        this.activeIndex = -1;
        break;
    }
  }
}
