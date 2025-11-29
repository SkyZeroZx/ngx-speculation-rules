import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  Provider,
} from '@angular/core';

import { SpeculationRulesServiceConfig } from '../interfaces';
import { SpeculationRulesBrowserService } from '../services/speculation-rules-browser.service';
import {
  SPECULATION_RULES_CONFIG,
  SpeculationRulesService,
} from '../token/speculation-rules.token';

/**
 * Provides Speculation Rules Service with platform detection
 * Automatically selects browser or server implementation
 *
 * @param config - Optional configuration for the service
 * @returns Provider array for dependency injection
 *
 * @example
 * ```ts
 * // In app.config.ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideSpeculationRules({
 *       autoInsert: true,
 *       defaultRules: {
 *         prefetch: [{
 *           source: 'document',
 *           eagerness: 'moderate'
 *         }]
 *       }
 *     })
 *   ]
 * };
 * ```
 */
export function provideSpeculationRules(
  config?: Partial<SpeculationRulesServiceConfig>,
): EnvironmentProviders {
  const providers: Provider[] = [];

  if (config) {
    providers.push({
      provide: SPECULATION_RULES_CONFIG,
      useValue: {
        ...config,
      },
    });
  }

  providers.push({
    provide: SpeculationRulesService,
    useClass: SpeculationRulesBrowserService,
  });

  const initEagerService = () => {
    inject(SpeculationRulesService);
  };

  return makeEnvironmentProviders([
    providers,
    provideAppInitializer(initEagerService),
  ]);
}
