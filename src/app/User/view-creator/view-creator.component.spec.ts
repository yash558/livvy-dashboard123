import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreatorComponent } from './view-creator.component';

describe('ViewCreatorComponent', () => {
  let component: ViewCreatorComponent;
  let fixture: ComponentFixture<ViewCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
