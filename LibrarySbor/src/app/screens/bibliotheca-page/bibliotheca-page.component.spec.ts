import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothecaPageComponent } from './bibliotheca-page.component';

describe('BibliothecaPageComponent', () => {
  let component: BibliothecaPageComponent;
  let fixture: ComponentFixture<BibliothecaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliothecaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliothecaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
