import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormInputsComponent } from './mat-form-inputs.component';

describe('MatFormInputsComponent', () => {
  let component: MatFormInputsComponent;
  let fixture: ComponentFixture<MatFormInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
