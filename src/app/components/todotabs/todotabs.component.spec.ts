/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodotabsComponent } from './todotabs.component';

describe('TodotabsComponent', () => {
  let component: TodotabsComponent;
  let fixture: ComponentFixture<TodotabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodotabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
