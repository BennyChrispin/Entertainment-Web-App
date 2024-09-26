import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSerieListComponent } from './tv-serie-list.component';

describe('TvSerieListComponent', () => {
  let component: TvSerieListComponent;
  let fixture: ComponentFixture<TvSerieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvSerieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
