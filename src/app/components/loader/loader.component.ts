import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div class="loader"></div> `,
  styles: [
    `
      .loader {
        border: 12px solid #555;
        border-top: 12px solid #d3307c;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoaderComponent {}
