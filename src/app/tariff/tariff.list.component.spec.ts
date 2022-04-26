import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListComponent } from './tariff.list.component';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
