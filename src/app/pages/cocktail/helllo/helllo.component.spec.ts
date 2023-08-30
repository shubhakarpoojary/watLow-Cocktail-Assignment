import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellloComponent } from './helllo.component';

describe('HellloComponent', () => {
  let component: HellloComponent;
  let fixture: ComponentFixture<HellloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HellloComponent]
    });
    fixture = TestBed.createComponent(HellloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
