import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PaisComponent } from './paginas/pais/pais.component';
import { PaisesComponent } from './paginas/paises/paises.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'paises', component: PaisesComponent},
  {path:'pais', component: PaisComponent},
  {path:'pais/:id', component: PaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  PaisComponent
]