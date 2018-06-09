import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { RouteReusableStrategy } from './route-reusable-strategy';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { I18nService } from './i18n.service';
import { HttpService } from './http/http.service';
import { HttpCacheService } from './http/http-cache.service';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { CacheInterceptor } from './http/cache.interceptor';
import { FooterComponent } from './shell/footer/footer.component';
import { ContentComponent } from './shell/content/content.component';
import { LeftSidebarComponent } from './shell/left-sidebar/left-sidebar.component';
import { MainMenuComponent} from './shell/main-menu/main-menu.component';

import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule, MenuModule,  MenuItem} from 'primeng/primeng';


import { UIShareService} from '@app/core/shell/shell.ui-service';
import { ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    NgbModule,
    RouterModule,
    ButtonModule,
    ConfirmDialogModule,
    MenuModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    FooterComponent,
    ContentComponent,
    LeftSidebarComponent,
    MainMenuComponent,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    I18nService,
    HttpCacheService,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    UIShareService,
    CacheInterceptor,
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    },
    ConfirmationService
  ],
  exports: [
    MenuModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
