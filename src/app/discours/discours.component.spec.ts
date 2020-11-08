import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoursComponent } from './discours.component';

describe('DiscoursComponent', () => {
  let component: DiscoursComponent;
  let fixture: ComponentFixture<DiscoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
