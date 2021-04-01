import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProviderModule } from './provider/provider.module';
//import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'provider', pathMatch: 'full' },
  {
    path: 'provider',
    loadChildren: () =>
      import('./provider/provider.module').then((mod) => mod.ProviderModule),
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
