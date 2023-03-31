import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';
import { AppConfig } from './models/app-config.model';

export const appConfigFactory = (
    appConfigService: AppConfigService
): (() => Observable<AppConfig>) => {
    return () => appConfigService.init();
};
