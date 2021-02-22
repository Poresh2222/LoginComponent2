import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuBalanceComponent } from './top-menu-balance.component';

describe('TopMenuBalanceComponent', () => {
  let component: TopMenuBalanceComponent;
  let fixture: ComponentFixture<TopMenuBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
