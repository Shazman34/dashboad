import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="branding">
      <a href="/" *ngIf="options.theme === 'light'">
      <img width="220" height="130" src="./assets/images/logos/logo.png" class="align-middle m-2" alt="logo" /> 
      </a>
      <a href="/" *ngIf="options.theme === 'dark'">
      <img width="220" height="130" src="./assets/images/logos/logo.png" class="align-middle m-2" alt="logo" /> 
      </a>
    </div>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}
