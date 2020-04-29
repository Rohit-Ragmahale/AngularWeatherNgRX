import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipEntryComponent } from './zip-entry.component';

describe('ZipEntryComponent', () => {
  let component: ZipEntryComponent;
  let fixture: ComponentFixture<ZipEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
