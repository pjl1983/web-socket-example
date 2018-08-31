import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDialogueBoxComponent } from './name-dialogue-box.component';

describe('NameDialogueBoxComponent', () => {
  let component: NameDialogueBoxComponent;
  let fixture: ComponentFixture<NameDialogueBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameDialogueBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
