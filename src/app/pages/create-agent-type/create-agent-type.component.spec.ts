import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgentTypeComponent } from './create-agent-type.component';

describe('CreateAgentTypeComponent', () => {
  let component: CreateAgentTypeComponent;
  let fixture: ComponentFixture<CreateAgentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
