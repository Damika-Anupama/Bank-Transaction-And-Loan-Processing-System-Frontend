import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manager.settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manager.settings.component.html',
  styleUrls: ['./manager.settings.component.scss']
})
export class ManagerSettingsComponent {

}
