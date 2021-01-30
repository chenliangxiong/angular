import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormalTransferComponent } from './normal-transfer.component';

describe('NormalTransferComponent', () => {
  let component: NormalTransferComponent;
  let fixture: ComponentFixture<NormalTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTransferComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormalTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
