import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App3Component } from './app3.component';

describe('App3Component', () => {
  let component: App3Component;
  let fixture: ComponentFixture<App3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App3Component]
    });
    fixture = TestBed.createComponent(App3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
