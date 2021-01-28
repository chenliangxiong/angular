import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardTransferPage } from './card-transfer.page';

describe('CardTransferPage', () => {
  let component: CardTransferPage;
  let fixture: ComponentFixture<CardTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
