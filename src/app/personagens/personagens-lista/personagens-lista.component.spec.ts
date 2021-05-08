import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensListaComponent } from './personagens-lista.component';

describe('PersonagensListaComponent', () => {
  let component: PersonagensListaComponent;
  let fixture: ComponentFixture<PersonagensListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
