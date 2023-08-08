import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.spinner.hide();
      }
      return event;
    }),
    catchError((error: HttpErrorResponse) => {
      const started = Date.now();
      const elapsed = Date.now() - started;
      console.log(`Error`,error);
      this.spinner.hide();
      return throwError(error);
    })
  );
  }
}
