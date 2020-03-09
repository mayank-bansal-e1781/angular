import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackingListComponent } from './create-packing-list.component';

describe('CreatePackingListComponent', () => {
  let component: CreatePackingListComponent;
  let fixture: ComponentFixture<CreatePackingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePackingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
