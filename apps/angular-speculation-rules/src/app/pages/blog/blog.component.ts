import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly posts = [
    {
      id: 1,
      title: 'Getting Started with Speculation Rules',
      date: 'Nov 28, 2025',
      excerpt:
        'Learn how to implement prefetching and prerendering in your Angular app.',
    },
    {
      id: 2,
      title: 'Understanding Eagerness Levels',
      date: 'Nov 25, 2025',
      excerpt:
        'Discover when to use immediate, eager, moderate, or conservative speculation.',
    },
    {
      id: 3,
      title: 'Debugging Speculation Rules',
      date: 'Nov 20, 2025',
      excerpt:
        'Use Chrome DevTools to inspect and debug your speculation rules.',
    },
  ];
}
