import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmFormComponent } from './abm-form.component';

describe('AbmFormComponent', () => {
  let component: AbmFormComponent;
  let fixture: ComponentFixture<AbmFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmFormComponent]
    });
    fixture = TestBed.createComponent(AbmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
