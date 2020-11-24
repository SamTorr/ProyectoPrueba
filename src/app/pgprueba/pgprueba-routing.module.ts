import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgpruebaPage } from './pgprueba.page';

const routes: Routes = [
  {
    path: '',
    component: PgpruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgpruebaPageRoutingModule {}
