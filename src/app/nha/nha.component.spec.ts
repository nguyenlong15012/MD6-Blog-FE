import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaComponent } from './nha.component';

describe('NhaComponent', () => {
  let component: NhaComponent;
  let fixture: ComponentFixture<NhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
