import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertproductComponent } from './insertproduct.component';

describe('InsertproductComponent', () => {
  let component: InsertproductComponent;
  let fixture: ComponentFixture<InsertproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
