import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APISqlComponent } from './api-sql.component';

describe('APISqlComponent', () => {
  let component: APISqlComponent;
  let fixture: ComponentFixture<APISqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APISqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APISqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
