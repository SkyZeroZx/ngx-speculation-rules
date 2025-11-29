# ngx-speculation-rules | Angular

Angular library for the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API) - Enable prefetching and prerendering for faster page navigations.

Angular SSR and Universal Friendly. Zoneless compatible.

## Demo

See a [live demo](https://skyzerozx.github.io/ngx-speculation-rules)

## Versions

Latest version available for each version of Angular

| ngx-speculation-rules | Angular     |
| --------------------- | ----------- |
| 1.0.0                 | 18.x - 20.x |

## Features

- 🚀 **Prefetch** - Load resources before they're needed
- ⚡ **Prerender** - Render pages in the background for instant navigation
- 🔧 **Configurable** - Control eagerness levels and targeting rules
- 📱 **SSR Compatible** - Works with Angular Universal/SSR
- 🎯 **Zoneless Ready** - Compatible with Angular's zoneless mode

## Installation

```bash
npm install ngx-speculation-rules
```

## Basic Usage

### Provider Setup

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideSpeculationRules } from 'ngx-speculation-rules';

export const appConfig: ApplicationConfig = {
  providers: [
    provideSpeculationRules({
      autoInsert: true,
      defaultRules: {
        prefetch: [{
          source: 'document',
          eagerness: 'moderate',
          where: {
            selector_matches: 'a[href^="/"]'
          }
        }]
      }
    })
  ]
};
```

### Prefetch All Internal Links

```typescript
provideSpeculationRules({
  autoInsert: true,
  defaultRules: {
    prefetch: [{
      source: 'document',
      eagerness: 'moderate',
      where: {
        selector_matches: 'a[href^="/"]'
      }
    }]
  }
})
```

### Prerender Specific Pages

```typescript
provideSpeculationRules({
  autoInsert: true,
  defaultRules: {
    prerender: [{
      source: 'list',
      urls: ['/about', '/contact', '/products'],
      eagerness: 'moderate'
    }]
  }
})
```

### Dynamic Rules with Service

```typescript
import { Component, inject } from '@angular/core';
import { SpeculationRulesService } from 'ngx-speculation-rules';

@Component({...})
export class MyComponent {
  private speculationService = inject(SpeculationRulesService);

  addPrefetchRule() {
    this.speculationService.insertRules({
      prefetch: [{
        source: 'document',
        eagerness: 'eager',
        where: {
          selector_matches: '.prefetch-link'
        }
      }]
    }, 'custom-prefetch');
  }

  removeRule() {
    this.speculationService.removeRules('custom-prefetch');
  }

  clearAllRules() {
    this.speculationService.clearAllRules();
  }
}
```

## API Reference

### Provider Configuration

| Option       | Type              | Description                                    |
| ------------ | ----------------- | ---------------------------------------------- |
| autoInsert   | `boolean`         | Automatically insert default rules on init    |
| defaultRules | `SpeculationRules`| Default speculation rules to apply            |

### Service Methods

| Method                      | Return          | Description                              |
| --------------------------- | --------------- | ---------------------------------------- |
| `insertRules(rules, id?)`   | `string \| null`| Insert rules, returns script ID          |
| `removeRules(id)`           | `boolean`       | Remove rules by ID                       |
| `clearAllRules()`           | `void`          | Remove all speculation rules             |

### Service Properties

| Property       | Type                | Description                              |
| -------------- | ------------------- | ---------------------------------------- |
| `isSupported`  | `SpeculationSupport`| Browser support information              |
| `isPrerendering`| `boolean`          | Check if page is currently prerendering  |

### Eagerness Levels

| Level        | Description                                  |
| ------------ | -------------------------------------------- |
| `immediate`  | Speculate as soon as possible                |
| `eager`      | Speculate on any small positive signal       |
| `moderate`   | Speculate on hover for 200ms                 |
| `conservative`| Speculate only on pointer/touch down        |

## Browser Support

The Speculation Rules API is supported in Chromium-based browsers (Chrome 109+, Edge 109+). The library gracefully handles unsupported browsers.

## License

MIT