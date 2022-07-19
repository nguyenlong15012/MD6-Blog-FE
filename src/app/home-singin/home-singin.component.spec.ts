import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSinginComponent } from './home-singin.component';

describe('HomeSinginComponent', () => {
  let component: HomeSinginComponent;
  let fixture: ComponentFixture<HomeSinginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSinginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSinginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
