import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByclickComponent } from './byclick.component';

describe('ByclickComponent', () => {
  let component: ByclickComponent;
  let fixture: ComponentFixture<ByclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
