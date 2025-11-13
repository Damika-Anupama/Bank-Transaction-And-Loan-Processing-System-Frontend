import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../service/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  mobileSidebarOpen = false;
  isDarkMode$!: Observable<boolean>;

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkMode$ = this.themeService.isDarkMode$;
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     const preloader = document.querySelector('.preloader');
    //     if (preloader) {
    //       preloader.classList.add('hidden');
    //     }
    //   }
    // });
  }

  toggleMobileSidebar() {
    this.mobileSidebarOpen = !this.mobileSidebarOpen;
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 768;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  exit() {
    // empty local storage and navigate to the welcome page
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }
}
