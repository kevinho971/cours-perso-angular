import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDevisComponent } from './backend-devis.component';

describe('BackendDevisComponent', () => {
  let component: BackendDevisComponent;
  let fixture: ComponentFixture<BackendDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
