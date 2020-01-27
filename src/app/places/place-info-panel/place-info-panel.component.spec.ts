import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInfoPanelComponent } from './place-info-panel.component';

describe('PlaceInfoPanelComponent', () => {
  let component: PlaceInfoPanelComponent;
  let fixture: ComponentFixture<PlaceInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
