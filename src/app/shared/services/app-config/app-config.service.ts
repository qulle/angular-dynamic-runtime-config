import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DefaultAppConfig } from './defaults/app-config.default';
import { AppConfig } from './models/app-config.model';
import * as _ from 'lodash';

/**
 * About: Service responsible for fetchng local application config
 */
@Injectable({
    providedIn: 'root',
})
export class AppConfigService {
    private readonly appConfigUrl: string;

    private appConfig: AppConfig;

    constructor(private readonly http: HttpClient) {
        this.appConfigUrl = environment.appConfig.url;
        this.appConfig = structuredClone(DefaultAppConfig);
    }

    init(): Observable<AppConfig> {
        // The ?cache parameter is used to always send the request and not return [HTTP/1.1 304 Not Modified]
        const timestamp = Date.now().toString();

        const appConfigRequest = this.http
            .get<AppConfig>(`${this.appConfigUrl}?cache=${timestamp}`)
            .pipe(
                tap((appConfig: AppConfig) => {
                    _.merge(this.appConfig, appConfig);
                }),
                catchError((error: any) => {
                    console.dir(error);
                    return of(error);
                })
            );

        return appConfigRequest;
    }

    getConfig(): AppConfig {
        return this.appConfig;
    }
}
