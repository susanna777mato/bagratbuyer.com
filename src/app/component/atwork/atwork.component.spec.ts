import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtworkComponent } from './atwork.component';

describe('AtworkComponent', () => {
  let component: AtworkComponent;
  let fixture: ComponentFixture<AtworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtworkComponent]
    });
    fixture = TestBed.createComponent(AtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
