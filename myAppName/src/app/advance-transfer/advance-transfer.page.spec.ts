import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvanceTransferPage } from './advance-transfer.page';

describe('AdvanceTransferPage', () => {
  let component: AdvanceTransferPage;
  let fixture: ComponentFixture<AdvanceTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvanceTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
