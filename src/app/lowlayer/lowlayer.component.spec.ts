import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowlayerComponent } from './lowlayer.component';

describe('LowlayerComponent', () => {
  let component: LowlayerComponent;
  let fixture: ComponentFixture<LowlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
