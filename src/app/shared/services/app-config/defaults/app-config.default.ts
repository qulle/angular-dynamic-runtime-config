import { AppConfig } from '../models/app-config.model';

export const DefaultAppConfig: AppConfig = {
    meta: {
        about: 'This JSON-file controls the configuration for the Application',
        version: '1.0.0',
        date: '2023-04-01 00:09:00',
        author: 'Qulle',
    },
    showMenu: true,
    headerBackgroundColor: '#333852',
    disableSelections: true,
    disableZoom: true,
    disableContextmenu: true,
};
