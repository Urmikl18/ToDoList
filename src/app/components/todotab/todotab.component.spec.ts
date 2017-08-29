/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodotabComponent } from './todotab.component';

describe('TodotabComponent', () => {
  let component: TodotabComponent;
  let fixture: ComponentFixture<TodotabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodotabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
