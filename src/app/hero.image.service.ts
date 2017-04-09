import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HeroImage } from './hero.image';

@Injectable()

export class HeroImageService  {
    private imgUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    private params = '?ts=1&apikey=c4ea4cfb65c9023aa3b6e48d64b92d81&hash=0ddae0d8ac22c2587d1a8a92225499e1';

    constructor(private http: Http) { }

    getImg(id: number): Promise<HeroImage> {
        const url = `${this.imgUrl}/${id}${this.params}`;
        console.log("Hero Object: ", this.http.get(url)
                .toPromise()
                .then(response => response.json().data as HeroImage)
                .catch(this.handleError));
        return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as HeroImage)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}