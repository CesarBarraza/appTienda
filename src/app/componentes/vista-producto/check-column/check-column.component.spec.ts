import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckColumnComponent } from './check-column.component';

describe('CheckColumnComponent', () => {
  let component: CheckColumnComponent;
  let fixture: ComponentFixture<CheckColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
