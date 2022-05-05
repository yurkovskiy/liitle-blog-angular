import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplecompComponent } from './examplecomp.component';

describe('ExamplecompComponent', () => {
  let component: ExamplecompComponent;
  let fixture: ComponentFixture<ExamplecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
