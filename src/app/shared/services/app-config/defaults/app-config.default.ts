import { AppConfig } from '../models/app-config.model';

export const DefaultAppConfig: AppConfig = {
    meta: {
        about: 'This JSON-file controls the configuration for the Application',
        version: '1.0.0',
        date: '2023-04-01 12:00:00',
        author: 'Qulle',
    },
    localization: {
        default: 'en-us',
        options: [
            {
                name: 'English',
                key: 'en-us',
            },
            {
                name: 'Swedish',
                key: 'sv-se',
            },
        ],
    },
    components: {
        appMenu: {
            enabled: true,
        },
        appHeader: {
            backgroundColor: '#333852',
        },
    },
    disable: {
        selections: true,
        zoom: true,
        contextMenu: true,
    },
};
