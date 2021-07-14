import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropertyCategoryComponent } from './create-property-category.component';

describe('CreatePropertyCategoryComponent', () => {
  let component: CreatePropertyCategoryComponent;
  let fixture: ComponentFixture<CreatePropertyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropertyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropertyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
