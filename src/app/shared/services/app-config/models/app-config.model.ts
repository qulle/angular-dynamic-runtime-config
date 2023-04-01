export interface AppConfig {
    meta: {
        about: string;
        version: string;
        date: string;
        author: string;
    };
    localization: {
        default: string;
        options: [
            {
                name: string;
                key: string;
            },
            {
                name: string;
                key: string;
            }
        ];
    };
    components: {
        appMenu: {
            enabled: boolean;
        };
        appHeader: {
            backgroundColor: string;
        };
    };
    disable: {
        selections: boolean;
        zoom: boolean;
        contextMenu: boolean;
    };
}
