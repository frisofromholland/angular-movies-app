import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MoviesComponent } from './movies/movies.component';

//noinspection TypeScriptValidateTypes
const routes:Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'movies/:city', component: MoviesComponent},
  {path: '**', redirectTo: '/movies/all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
