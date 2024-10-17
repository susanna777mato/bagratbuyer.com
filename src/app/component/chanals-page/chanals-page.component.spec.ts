import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanalsPageComponent } from './chanals-page.component';

describe('ChanalsPageComponent', () => {
  let component: ChanalsPageComponent;
  let fixture: ComponentFixture<ChanalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChanalsPageComponent]
    });
    fixture = TestBed.createComponent(ChanalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
