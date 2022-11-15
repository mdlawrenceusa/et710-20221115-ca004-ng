import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeGoodsComponent } from './homemade-goods/homemade-goods.component';
import { JdMusicComponent } from './jd-music/jd-music.component';

const routes: Routes = [
  
    { path: '', component: HomemadeGoodsComponent },
    { path: 'jdmusic', component: JdMusicComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
