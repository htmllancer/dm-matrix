import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryShellComponent } from './entry-shell.component';

describe('EntryShellComponent', () => {
  let component: EntryShellComponent;
  let fixture: ComponentFixture<EntryShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
