import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersinfoComponent } from './charactersinfo.component';

describe('CharactersinfoComponent', () => {
  let component: CharactersinfoComponent;
  let fixture: ComponentFixture<CharactersinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
