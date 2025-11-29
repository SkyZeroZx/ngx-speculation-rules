/**
 * Speculation Rules API Configuration Interfaces
 * Based on: https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API
 */

/**
 * Types of speculative loading
 */
export type SpeculationAction = 'prefetch' | 'prerender';

/**
 * Eagerness levels for speculation rules
 * @see https://developer.chrome.com/docs/web-platform/prerender-pages#eagerness
 */
export type SpeculationEagerness =
  | 'immediate'
  | 'eager'
  | 'moderate'
  | 'conservative';

/**
 * Source types for speculation rules
 */
export type SpeculationSource = 'list' | 'document';

/**
 * Referrer policy options for speculation rules
 */
export type SpeculationReferrerPolicy =
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

/**
 * Requirements for cross-origin speculation
 */
export type SpeculationRequirement = 'anonymous-client-ip-when-cross-origin';

/**
 * Condition matchers for document rules
 */
export interface SpeculationCondition {
  /** Match URLs by href pattern */
  href_matches?: string;
  /** Match URLs by relative pattern */
  relative_to?: 'document' | 'ruleset';
  /** Match elements by CSS selector */
  selector_matches?: string;
  /** Logical AND of conditions */
  and?: SpeculationCondition[];
  /** Logical OR of conditions */
  or?: SpeculationCondition[];
  /** Logical NOT of condition */
  not?: SpeculationCondition;
}

/**
 * Base rule configuration
 */
export interface SpeculationRuleBase {
  /** Referrer policy for the speculation */
  referrer_policy?: SpeculationReferrerPolicy;
  /** Requirements for cross-origin speculation */
  requires?: SpeculationRequirement[];
  /** Target hint for browser decisions */
  target_hint?: '_blank' | '_self';
  /** Eagerness level for speculation */
  eagerness?: SpeculationEagerness;
}

/**
 * List-based speculation rule
 */
export interface SpeculationListRule extends SpeculationRuleBase {
  source: 'list';
  /** Array of URLs to prefetch/prerender */
  urls: string[];
  /** Tags */
  tag?: string;
}

/**
 * Document-based speculation rule
 */
export interface SpeculationDocumentRule extends SpeculationRuleBase {
  source: 'document';
  /** Conditions to match links in the document */
  where?: SpeculationCondition;
}

/**
 * Union type for all rule types
 */
export type SpeculationRule = SpeculationListRule | SpeculationDocumentRule;

/**
 * Complete speculation rules structure
 */
export interface SpeculationRules {
  /** Prefetch rules */
  prefetch?: SpeculationRule[];
  /** Prerender rules */
  prerender?: SpeculationRule[];
}

/**
 * Service configuration options
 */
export interface SpeculationRulesServiceConfig {
  /** Auto-insert rules on service initialization */
  autoInsert?: boolean;
  /** Default rules to apply */
  defaultRules?: SpeculationRules;
}

/**
 * Detection result interface
 */
export interface SpeculationSupport {
  /** Whether Speculation Rules API is supported */
  supported: boolean;
  /** Whether prefetch is supported */
  prefetchSupported: boolean;
  /** Whether prerender is supported */
  prerenderSupported: boolean;
}
