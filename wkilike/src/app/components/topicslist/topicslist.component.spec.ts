import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicslistComponent } from './topicslist.component';

describe('TopicslistComponent', () => {
  let component: TopicslistComponent;
  let fixture: ComponentFixture<TopicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
