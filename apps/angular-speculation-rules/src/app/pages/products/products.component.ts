import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'speculation-rules-products',
  templateUrl: './products.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  readonly products = [
    {
      id: 1,
      name: 'Prefetch Package',
      price: 'Free',
      description: 'Load resources before needed',
    },
    {
      id: 2,
      name: 'Prerender Bundle',
      price: 'Free',
      description: 'Render pages in background',
    },
    {
      id: 3,
      name: 'Eagerness Control',
      price: 'Free',
      description: 'Fine-tune speculation timing',
    },
    {
      id: 4,
      name: 'SSR Compatible',
      price: 'Free',
      description: 'Works with Angular Universal',
    },
  ];
}
