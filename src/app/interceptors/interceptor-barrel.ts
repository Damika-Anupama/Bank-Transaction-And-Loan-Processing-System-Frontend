import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { LoggingInterceptorService } from "./logging-interceptor-service.interceptor";
import { TokenInterceptorService } from "./token-interceptor-service.interceptor";
import { LoadingInterceptorInterceptor } from "./loading-interceptor.interceptor";

/** "Barrel" of Http Interceptors
 Http interceptor providers in outside-in order */

export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
    ,{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true
  }
]