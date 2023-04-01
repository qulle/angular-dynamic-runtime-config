import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './shared/services/app-config/app-config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'angular-dynamic-runtime-config';
    isMenuEnabled!: boolean;

    constructor(private appConfig: AppConfigService) {}

    ngOnInit(): void {
        this.isMenuEnabled = this.appConfig.getConfig().components.appMenu.enabled;
    }
}
