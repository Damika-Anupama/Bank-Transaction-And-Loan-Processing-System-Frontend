import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../service/theme.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager.dashboard.component.html',
  styleUrls: ['./manager.dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {
  isSidebarOpen = false;
  isDarkMode$!: Observable<boolean>;

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  exit() {
    // Save theme preference before clearing localStorage
    const currentTheme = localStorage.getItem('theme');

    // Clear all localStorage except theme
    localStorage.clear();

    // Restore theme preference
    if (currentTheme) {
      localStorage.setItem('theme', currentTheme);
    }

    this.router.navigate(['/welcome']);
  }
}
