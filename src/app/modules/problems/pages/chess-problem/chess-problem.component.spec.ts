import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessProblemComponent } from './chess-problem.component';

describe('ChessProblemComponent', () => {
  let component: ChessProblemComponent;
  let fixture: ComponentFixture<ChessProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChessProblemComponent]
    });
    fixture = TestBed.createComponent(ChessProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
