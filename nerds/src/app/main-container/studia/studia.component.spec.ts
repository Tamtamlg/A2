/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudiaComponent } from './studia.component';

describe('StudiaComponent', () => {
  let component: StudiaComponent;
  let fixture: ComponentFixture<StudiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
