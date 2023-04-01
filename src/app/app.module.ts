import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appConfigFactory } from './shared/services/app-config/app-config-factory';
import { AppConfigService } from './shared/services/app-config/app-config.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
    declarations: [AppComponent, AppHeaderComponent, AppMenuComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appConfigFactory,
            deps: [AppConfigService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
