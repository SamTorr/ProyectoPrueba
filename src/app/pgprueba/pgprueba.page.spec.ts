import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PgpruebaPage } from './pgprueba.page';

describe('PgpruebaPage', () => {
  let component: PgpruebaPage;
  let fixture: ComponentFixture<PgpruebaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgpruebaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PgpruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
