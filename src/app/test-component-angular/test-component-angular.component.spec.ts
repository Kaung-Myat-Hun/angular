import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentAngularComponent } from './test-component-angular.component';

describe('TestComponentAngularComponent', () => {
  let component: TestComponentAngularComponent;
  let fixture: ComponentFixture<TestComponentAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
