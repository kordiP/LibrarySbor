import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSlidingComponent } from './carousel-sliding.component';

describe('CarouselSlidingComponent', () => {
  let component: CarouselSlidingComponent;
  let fixture: ComponentFixture<CarouselSlidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSlidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSlidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
