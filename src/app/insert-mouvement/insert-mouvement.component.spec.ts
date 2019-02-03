import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMouvementComponent } from './insert-mouvement.component';

describe('InsertMouvementComponent', () => {
  let component: InsertMouvementComponent;
  let fixture: ComponentFixture<InsertMouvementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMouvementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
