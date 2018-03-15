import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoute} from './app.route';
import {RecipeService} from './recipes/recipes.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {LoadingModule} from 'ngx-loading';
import {LoadingService} from './shared/loading.service';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth.interceptor';
import {LoggingInterceptor} from './shared/logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoute,
    LoadingModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService, AuthService, AuthGuard, LoadingService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
