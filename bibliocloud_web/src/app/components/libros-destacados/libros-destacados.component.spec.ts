import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDestacadosComponent } from './libros-destacados.component';

describe('LibrosDestacadosComponent', () => {
  let component: LibrosDestacadosComponent;
  let fixture: ComponentFixture<LibrosDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosDestacadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
