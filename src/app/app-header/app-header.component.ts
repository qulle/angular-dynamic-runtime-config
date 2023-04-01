import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../shared/services/app-config/app-config.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
    headerBackgroundColor!: string;

    constructor(private appConfig: AppConfigService) {}

    ngOnInit(): void {
        this.headerBackgroundColor =
            this.appConfig.getConfig().components.appHeader.backgroundColor;
    }
}
