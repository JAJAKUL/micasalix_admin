import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAgentTypeComponent } from './edit-sub-agent-type.component';

describe('EditSubAgentTypeComponent', () => {
  let component: EditSubAgentTypeComponent;
  let fixture: ComponentFixture<EditSubAgentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubAgentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubAgentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
