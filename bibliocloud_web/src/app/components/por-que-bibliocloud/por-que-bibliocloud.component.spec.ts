import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorQueBibliocloudComponent } from './por-que-bibliocloud.component';

describe('PorQueBibliocloudComponent', () => {
  let component: PorQueBibliocloudComponent;
  let fixture: ComponentFixture<PorQueBibliocloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorQueBibliocloudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorQueBibliocloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
