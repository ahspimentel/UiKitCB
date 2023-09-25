import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbButtonComponent } from './cb-button.component';

describe('CbButtonComponent', () => {
  let component: CbButtonComponent;
  let fixture: ComponentFixture<CbButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbButtonComponent]
    });
    fixture = TestBed.createComponent(CbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
