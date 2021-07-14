import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropertyCategoryComponent } from './edit-property-category.component';

describe('EditPropertyCategoryComponent', () => {
  let component: EditPropertyCategoryComponent;
  let fixture: ComponentFixture<EditPropertyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPropertyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPropertyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
