import { OgrencilisteleComponent } from './components/ogrencilistele/ogrencilistele.component';
import { DerslisteleComponent } from './components/derslistele/derslistele.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DersComponent } from './components/ders/ders.component';
import { HomeComponent } from './components/home/home.component';
import { OgrenciComponent } from './components/ogrenci/ogrenci.component';
import { VerodevComponent } from './components/verodev/verodev.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'ogrenci', component: OgrenciComponent
  },
  {
    path: 'ders', component: DersComponent
  },
  {
    path: 'derslistele/:ogrId', component: DerslisteleComponent
  },
  {
    path: 'ogrencilistele/:dersId', component: OgrencilisteleComponent
  },
  {
    path: 'verodev', component: VerodevComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
