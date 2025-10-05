import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPrimaFresca } from './materia-prima-fresca';

describe('MateriaPrimaFresca', () => {
  let component: MateriaPrimaFresca;
  let fixture: ComponentFixture<MateriaPrimaFresca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaPrimaFresca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaPrimaFresca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
