import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysharedlibComponent } from './mysharedlib.component';

describe('MysharedlibComponent', () => {
  let component: MysharedlibComponent;
  let fixture: ComponentFixture<MysharedlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysharedlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysharedlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
