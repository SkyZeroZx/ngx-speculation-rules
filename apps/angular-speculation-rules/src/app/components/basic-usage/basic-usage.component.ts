import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpeculationRulesService } from 'ngx-speculation-rules';

@Component({
  selector: 'speculation-rules-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicUsageComponent {
  private readonly speculationService = inject(SpeculationRulesService);

  addPrefetchRule(): void {
    this.speculationService.insertRules(
      {
        prefetch: [
          {
            source: 'document',
            eagerness: 'moderate',
            where: {
              selector_matches: 'a[href^="/"]',
            },
          },
        ],
      },
      'demo-prefetch-rule'
    );
  }

  addPrerenderRule(): void {
    this.speculationService.insertRules(
      {
        prerender: [
          {
            source: 'list',
            urls: ['/about', '/contact'],
            eagerness: 'moderate',
          },
        ],
      },
      'demo-prerender-rule'
    );
  }

  clearRules(): void {
    this.speculationService.clearAllRules();
  }
}
