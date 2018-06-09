import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { DashboardModule} from '@app/dashboard/dashboard.module';

import { PortalModule } from './portal/portal.module';

import { WelcomeModule } from '@app/welcome/welcome.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CanDeactivateGuard} from '@app/shared/guards/canDeactivate.guard';
import { RoutingState } from '@app/core/routeState.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    PortalModule,
    WelcomeModule,
    DashboardModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [CanDeactivateGuard, RoutingState],
  bootstrap: [AppComponent]
})
export class AppModule { }
