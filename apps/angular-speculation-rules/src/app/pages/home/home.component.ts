import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpeculationRulesService } from 'ngx-speculation-rules';

import { BasicUsageComponent, DocumentationComponent } from '../../components';

@Component({
  selector: 'speculation-rules-home',
  templateUrl: './home.component.html',
  imports: [RouterLink, BasicUsageComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly speculationService = inject(SpeculationRulesService);

  readonly isSupported = this.speculationService.isSupported;
  readonly isPrerendering = this.speculationService.isPrerendering;
}
