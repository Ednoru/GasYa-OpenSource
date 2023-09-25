import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGrifoComponent } from './buscar-grifo.component';

describe('BuscarGrifoComponent', () => {
  let component: BuscarGrifoComponent;
  let fixture: ComponentFixture<BuscarGrifoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarGrifoComponent]
    });
    fixture = TestBed.createComponent(BuscarGrifoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
