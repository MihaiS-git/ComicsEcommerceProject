import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelStatusComponent } from './admin-panel-status.component';

describe('AdminPanelStatusComponent', () => {
  let component: AdminPanelStatusComponent;
  let fixture: ComponentFixture<AdminPanelStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
