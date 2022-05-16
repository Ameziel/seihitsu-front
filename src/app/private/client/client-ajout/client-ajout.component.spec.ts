import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAjoutComponent } from './client-ajout.component';

describe('ClientAjoutComponent', () => {
  let component: ClientAjoutComponent;
  let fixture: ComponentFixture<ClientAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
