import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipessComponent} from './recipess.component';

describe('RecipessComponent', () => {
  let component: RecipessComponent;
  let fixture: ComponentFixture<RecipessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipessComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
