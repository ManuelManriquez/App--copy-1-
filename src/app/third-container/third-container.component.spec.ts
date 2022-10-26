import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdContainerComponent } from './third-container.component';

describe('ThirdContainerComponent', () => {
  let component: ThirdContainerComponent;
  let fixture: ComponentFixture<ThirdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
