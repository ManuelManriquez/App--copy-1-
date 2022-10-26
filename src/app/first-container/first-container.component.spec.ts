import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContainerComponent } from './first-container.component';

describe('FirstContainerComponent', () => {
  let component: FirstContainerComponent;
  let fixture: ComponentFixture<FirstContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
