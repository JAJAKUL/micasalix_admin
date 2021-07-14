import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubAgentTypeComponent } from './create-sub-agent-type.component';

describe('CreateSubAgentTypeComponent', () => {
  let component: CreateSubAgentTypeComponent;
  let fixture: ComponentFixture<CreateSubAgentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubAgentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubAgentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
