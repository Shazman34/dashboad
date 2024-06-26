import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.scss']
})
export class SettingCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;
}
