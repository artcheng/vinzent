import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketchartComponent } from './marketchart.component';

describe('MarketchartComponent', () => {
  let component: MarketchartComponent;
  let fixture: ComponentFixture<MarketchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
