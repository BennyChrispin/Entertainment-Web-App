import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMarkListComponent } from './book-mark-list.component';

describe('BookMarkListComponent', () => {
  let component: BookMarkListComponent;
  let fixture: ComponentFixture<BookMarkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookMarkListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMarkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
