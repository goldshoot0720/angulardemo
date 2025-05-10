import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemyComponent } from './tablemy.component';

describe('TablemyComponent', () => {
  let component: TablemyComponent;
  let fixture: ComponentFixture<TablemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablemyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
