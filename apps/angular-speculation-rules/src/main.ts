import {
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideSpeculationRules } from 'ngx-speculation-rules';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideSpeculationRules({
      autoInsert: true,
      defaultRules: {
        prefetch: [
          {
            source: 'document',
            eagerness: 'moderate',
            where: {
              selector_matches: 'a[href^="/"]',
            },
          },
        ],
        prerender: [
          {
            source: 'list',
            urls: ['/about', '/products', '/contact', '/blog'],
            eagerness: 'moderate',
          },
        ],
      },
    }),
  ],
}).catch((err) => console.error(err));
