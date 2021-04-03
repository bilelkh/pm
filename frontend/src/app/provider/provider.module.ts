import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProviderListComponent, ProviderDetailsComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProviderModule {}
