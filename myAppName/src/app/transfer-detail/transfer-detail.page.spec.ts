import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferDetailPage } from './transfer-detail.page';

describe('TransferDetailPage', () => {
  let component: TransferDetailPage;
  let fixture: ComponentFixture<TransferDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
