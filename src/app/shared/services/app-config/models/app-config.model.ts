export interface AppConfig {
    meta: {
        about: string;
        version: string;
        date: string;
        author: string;
    };
    locale: {
        default: string;
        selected: string;
        supported: Array<{
            key: string;
            value: string;
        }>;
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
