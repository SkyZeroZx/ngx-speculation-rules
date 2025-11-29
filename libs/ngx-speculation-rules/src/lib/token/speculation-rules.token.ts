import { InjectionToken } from '@angular/core';
import {
  SpeculationRules,
  SpeculationRulesServiceConfig,
  SpeculationSupport,
} from '../interfaces';

/**
 * Abstract service for managing Speculation Rules API
 * Provides platform-agnostic interface for prefetching and prerendering
 */
export abstract class SpeculationRulesService {
  /**
   * Check if Speculation Rules API is supported
   */
  abstract readonly isSupported: SpeculationSupport;

  /**
   * Check if the document is currently prerendering
   */
  abstract readonly isPrerendering: boolean;

  /**
   * Insert speculation rules into the document
   * @param rules - The speculation rules to insert
   * @param id - Optional ID for the script element (for later removal)
   * @returns The created script element ID or null if not supported
   */
  abstract insertRules(rules: SpeculationRules, id?: string): string | null;

  /**
   * Remove previously inserted speculation rules
   * @param id - The ID of the script element to remove
   * @returns True if the rules were removed, false otherwise
   */
  abstract removeRules(id: string): boolean;

  /**
   * Remove all speculation rules from the document
   */
  abstract clearAllRules(): void;
}

/**
 * Injection token for Speculation Rules Service configuration
 */
export const SPECULATION_RULES_CONFIG =
  new InjectionToken<SpeculationRulesServiceConfig>(
    'SPECULATION_RULES_CONFIG',
    {
      factory: () => ({
        enabled: true,
        autoInsert: true,
      }),
    },
  );
