import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Storage } from '@ionic/storage'
import { TokenService } from '../guard/token.service'

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private token;

    constructor(private storage: Storage, private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        this.token = this.tokenService.getToken();
        
        if (this.token) {
            console.log(this.token);
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + this.token)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}