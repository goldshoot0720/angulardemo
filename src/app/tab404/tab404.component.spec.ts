import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab404Component } from './tab404.component';

describe('Tab404Component', () => {
  let component: Tab404Component;
  let fixture: ComponentFixture<Tab404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
