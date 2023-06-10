import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsProblemComponent } from './strings-problem.component';

describe('StringsProblemComponent', () => {
  let component: StringsProblemComponent;
  let fixture: ComponentFixture<StringsProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringsProblemComponent]
    });
    fixture = TestBed.createComponent(StringsProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
