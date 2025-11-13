import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  loading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe(
      (isLoading) => {
        this.loading = isLoading;
      }
    );
  }
}
