import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  showAlert = false;

  constructor() { }

  showMissingFileAlert(): void {
    this.showAlert = true;
  }

  ngOnInit(): void {
  }

}
