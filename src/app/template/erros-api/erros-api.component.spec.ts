import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosApiComponent } from './erros-api.component';

describe('ErrosApiComponent', () => {
  let component: ErrosApiComponent;
  let fixture: ComponentFixture<ErrosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrosApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
