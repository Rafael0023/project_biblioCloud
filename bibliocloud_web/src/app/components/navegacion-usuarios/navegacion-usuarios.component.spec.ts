import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionUsuariosComponent } from './navegacion-usuarios.component';

describe('NavegacionUsuariosComponent', () => {
  let component: NavegacionUsuariosComponent;
  let fixture: ComponentFixture<NavegacionUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacionUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegacionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
