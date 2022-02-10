import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesShellComponent } from './features-shell.component';

describe('FeaturesShellComponent', () => {
  let component: FeaturesShellComponent;
  let fixture: ComponentFixture<FeaturesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
