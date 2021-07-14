import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTypeListComponent } from './agent-type-list.component';

describe('AgentTypeListComponent', () => {
  let component: AgentTypeListComponent;
  let fixture: ComponentFixture<AgentTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
