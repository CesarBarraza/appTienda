import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoVistaCardComponent } from './producto-vista-card.component';

describe('ProductoVistaCardComponent', () => {
  let component: ProductoVistaCardComponent;
  let fixture: ComponentFixture<ProductoVistaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoVistaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoVistaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
