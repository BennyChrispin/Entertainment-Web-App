import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSerieComponent } from './tv-serie.component';

describe('TvSerieComponent', () => {
  let component: TvSerieComponent;
  let fixture: ComponentFixture<TvSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvSerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
