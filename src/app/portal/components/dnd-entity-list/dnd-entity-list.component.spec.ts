import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndEntityListComponent } from './dnd-entity-list.component';

describe('DndEntityListComponent', () => {
  let component: DndEntityListComponent;
  let fixture: ComponentFixture<DndEntityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndEntityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
