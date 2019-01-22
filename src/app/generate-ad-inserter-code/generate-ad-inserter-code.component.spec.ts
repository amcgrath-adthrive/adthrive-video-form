import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAdInserterCodeComponent } from './generate-ad-inserter-code.component';

describe('GenerateAdInserterCodeComponent', () => {
  let component: GenerateAdInserterCodeComponent;
  let fixture: ComponentFixture<GenerateAdInserterCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateAdInserterCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAdInserterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
