import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgpruebaPageRoutingModule } from './pgprueba-routing.module';

import { PgpruebaPage } from './pgprueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgpruebaPageRoutingModule
  ],
  declarations: [PgpruebaPage]
})
export class PgpruebaPageModule {}
