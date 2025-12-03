import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let component: LoadingService;
  let fixture: ComponentFixture<LoadingService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
