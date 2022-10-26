import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondContainerComponent } from './second-container.component';

describe('SecondContainerComponent', () => {
  let component: SecondContainerComponent;
  let fixture: ComponentFixture<SecondContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
