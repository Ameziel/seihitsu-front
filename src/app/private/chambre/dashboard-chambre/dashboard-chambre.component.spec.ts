import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChambreComponent } from './dashboard-chambre.component';

describe('DashboardChambreComponent', () => {
  let component: DashboardChambreComponent;
  let fixture: ComponentFixture<DashboardChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
