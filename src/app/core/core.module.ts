import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {AppRoute} from '../app.route';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [CommonModule, AppRoute, SharedModule],
  exports: [HeaderComponent]
})
export class CoreModule {
}
