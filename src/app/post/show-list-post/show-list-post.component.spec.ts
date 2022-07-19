import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListPostComponent } from './show-list-post.component';

describe('ShowListPostComponent', () => {
  let component: ShowListPostComponent;
  let fixture: ComponentFixture<ShowListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
