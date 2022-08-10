/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {PersistenceService} from '../services/persistence.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken')
    if (token) {
      console.log(token)
      const clonedReq = req.clone({
        headers: req.headers.set('accessToken', token),
      })
      return next.handle(clonedReq)
    } else {
      return next.handle(req)
    }
  }
}
