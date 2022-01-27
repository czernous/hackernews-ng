import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="header__logo">Y</div>
      <h1 class="header__title">Hacker News</h1>
    </header>
  `,
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {}
