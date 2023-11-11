import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmListComponent } from './abm-list.component';

describe('AbmListComponent', () => {
  let component: AbmListComponent;
  let fixture: ComponentFixture<AbmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmListComponent]
    });
    fixture = TestBed.createComponent(AbmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
