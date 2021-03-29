import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminproductsComponent } from './viewadminproducts.component';

describe('ViewadminproductsComponent', () => {
  let component: ViewadminproductsComponent;
  let fixture: ComponentFixture<ViewadminproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewadminproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadminproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
