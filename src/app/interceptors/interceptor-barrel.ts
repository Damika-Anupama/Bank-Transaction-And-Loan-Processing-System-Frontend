import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { LoggingInterceptorService } from "./logging-interceptor-service.interceptor";
import { TokenInterceptorService } from "./token-interceptor-service.interceptor";
import { LoadingInterceptorInterceptor } from "./loading-interceptor.interceptor";
import { ErrorInterceptor } from "./error-interceptor.interceptor";

/** "Barrel" of Http Interceptors
 Http interceptor providers in outside-in order

 Order matters:
 1. ErrorInterceptor - MUST be first to catch all errors from other interceptors
 2. LoadingInterceptor - Shows/hides loading indicator
 3. TokenInterceptor - Adds authentication token to requests
 4. LoggingInterceptor - Logs request/response details
 */

export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true
  }
]