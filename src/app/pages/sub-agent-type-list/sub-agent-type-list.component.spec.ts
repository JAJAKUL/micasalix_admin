import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentTypeListComponent } from './sub-agent-type-list.component';

describe('SubAgentTypeListComponent', () => {
  let component: SubAgentTypeListComponent;
  let fixture: ComponentFixture<SubAgentTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAgentTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAgentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
