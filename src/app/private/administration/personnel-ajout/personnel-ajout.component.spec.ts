import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAjoutComponent } from './personnel-ajout.component';

describe('PersonnelAjoutComponent', () => {
  let component: PersonnelAjoutComponent;
  let fixture: ComponentFixture<PersonnelAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
