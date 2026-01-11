import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWishList } from './my-wish-list';

describe('MyWishList', () => {
  let component: MyWishList;
  let fixture: ComponentFixture<MyWishList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWishList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWishList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
