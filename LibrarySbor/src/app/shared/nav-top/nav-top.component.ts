import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  isMenuOpen = false;
  activeIndex = -1;

  constructor(private router: Router) { }

  closeMenu() {
    this.isMenuOpen = false;
  }

  setActive(index: number) {
    this.activeIndex = index;
    this.closeMenu();
  }

  ngOnInit(): void {
    
  }
}
