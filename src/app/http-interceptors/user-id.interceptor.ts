import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { TokenService } from '../guard/token.service'

import { Observable } from 'rxjs';

@Injectable()
export class UserIdInterceptor implements HttpInterceptor {

    private userId;

    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        this.userId = this.tokenService.getUserId();

        if (req.url.search(':userId') != -1) {
            let cloned = req.clone();
            cloned.url.replace('/:userId/', this.userId);
            console.info('UserId Interceptor, match: ', this.userId);
            return next.handle(cloned);
        } else {
            console.info('UserId Interceptor, no match.');
            return next.handle(req);
        }
    }
}