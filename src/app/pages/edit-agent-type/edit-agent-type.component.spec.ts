import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgentTypeComponent } from './edit-agent-type.component';

describe('EditAgentTypeComponent', () => {
  let component: EditAgentTypeComponent;
  let fixture: ComponentFixture<EditAgentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
