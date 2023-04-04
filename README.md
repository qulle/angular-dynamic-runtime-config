# Angular Dynamic Runtime Config

## About

Load JSON configuration at application startup. This can dynamically control the user interface style the need for a rebuild of the application.

## Usage

This concept is built around the `APP_INITIALIZER` provider.
```typescript
import { APP_INITIALIZER } from '@angular/core';

@NgModule({
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appConfigFactory,
            deps: [AppConfigService],
            multi: true,
        }
    ],
})
export class AppModule {}
```

When the application is loaded it will try and load the `app-config.json` file and merge it with the in-app default instance. A deep merge using `lodash` merge function will be performed. 

The service can then be injected into any component, module or service. 
```typescript
export class AppComponent implements OnInit {
    isMenuEnabled!: boolean;

    constructor(
        private appConfig: AppConfigService
    ) { }

    ngOnInit(): void {
        this.isMenuEnabled = this.appConfig.getConfig().components.appMenu.enabled;
    }
}
```

The dynamic app-config.json can look something like this. This can be combined with standalone language files to create new translations without having to recompile the code and make a new release. Check out my other example [github.com/qulle/angular-localization](https://github.com/qulle/angular-localization) on how to load JSON files to switch between languages without reloading the application.
```json
{
    "meta": {
        "about": "This JSON-file controls the configuration for the Application",
        "version": "1.0.0",
        "date": "2023-04-01 12:00:00",
        "author": "Qulle"
    },
    "locale": {
        "default": "sv-se",
        "selected": "en-us",
        "supported": [
            {
                "key": "English (en-us)",
                "value": "en-us"
            },
            {
                "key": "Swedish (sv-se)",
                "value": "sv-se"
            },
            {
                "key": "Chinese (zn-zh)",
                "value": "zn-zh"
            }
        ]
    },
    "components": {
        "appMenu": {
            "enabled": true
        },
        "appHeader": {
            "backgroundColor": "#1066a3"
        }
    },
    "disable": {
        "selections": true,
        "zoom": true,
        "contextMenu": true
    }
}
```

## Author
[Qulle](https://github.com/qulle/)