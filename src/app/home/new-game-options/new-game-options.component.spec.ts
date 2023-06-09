import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameOptionsComponent } from './new-game-options.component';

describe('NewGameOptionsComponent', () => {
  let component: NewGameOptionsComponent;
  let fixture: ComponentFixture<NewGameOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGameOptionsComponent]
    });
    fixture = TestBed.createComponent(NewGameOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
