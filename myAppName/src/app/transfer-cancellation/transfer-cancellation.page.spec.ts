import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferCancellationPage } from './transfer-cancellation.page';

describe('TransferCancellationPage', () => {
  let component: TransferCancellationPage;
  let fixture: ComponentFixture<TransferCancellationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferCancellationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferCancellationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
