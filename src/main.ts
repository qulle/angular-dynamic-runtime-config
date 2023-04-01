import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppConfigService } from './app/shared/services/app-config/app-config.service';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(app => {
        const appConfigService: AppConfigService = app.injector.get(AppConfigService);

        if (appConfigService.getConfig().disable.selections) {
            document.body.classList.add('app-disable-selections');
        }

        if (appConfigService.getConfig().disable.zoom) {
            document.body.classList.add('app-disable-zoom');
        }

        if (appConfigService.getConfig().disable.contextMenu) {
            document.body.classList.add('app-disable-contextmenu');
        }
    })
    .catch(err => {
        console.error(err);
    });

const onTouchStart = function (event: TouchEvent) {
    if (event.touches.length > 1) {
        if (document.body.classList.contains('app-disable-zoom')) {
            event.preventDefault();
        }
    }
};

const isZoomKey = function (event: KeyboardEvent) {
    return (
        (event.ctrlKey || event.metaKey) &&
        (event.key === '=' ||
            event.key === '+' ||
            event.key === '-' ||
            event.key === 'AudioVolumeMute')
    );
};

const onKeyDown = function (event: KeyboardEvent) {
    if (isZoomKey(event)) {
        if (document.body.classList.contains('app-disable-zoom')) {
            event.preventDefault();
        }
    }
};

const onWheel = function (event: WheelEvent) {
    if (event.ctrlKey) {
        if (document.body.classList.contains('app-disable-zoom')) {
            event.preventDefault();
        }
    }
};

const onContextMenu = function (event: MouseEvent) {
    if (document.body.classList.contains('app-disable-contextmenu')) {
        event.preventDefault();
    }
};

document.addEventListener('touchstart', onTouchStart, {
    passive: false,
});

document.addEventListener('keydown', onKeyDown, {
    passive: false,
});

document.addEventListener('wheel', onWheel, {
    passive: false,
});

document.addEventListener('contextmenu', onContextMenu, {
    passive: false,
});
