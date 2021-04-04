import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
const routes: Routes = [
  {
    path: '',
    component: ProviderListComponent,
  },

  { path: 'provider-details/:id', component: ProviderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
