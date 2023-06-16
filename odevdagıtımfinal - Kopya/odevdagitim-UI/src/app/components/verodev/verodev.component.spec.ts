/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerodevComponent } from './verodev.component';

describe('VerodevComponent', () => {
  let component: VerodevComponent;
  let fixture: ComponentFixture<VerodevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerodevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerodevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
