import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicspageComponent } from './topicspage.component';

describe('TopicspageComponent', () => {
  let component: TopicspageComponent;
  let fixture: ComponentFixture<TopicspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
