import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMatConfirmDialogComponent } from './share-mat-confirm-dialog.component';

describe('ShareMatConfirmDialogComponent', () => {
  let component: ShareMatConfirmDialogComponent;
  let fixture: ComponentFixture<ShareMatConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareMatConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareMatConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
