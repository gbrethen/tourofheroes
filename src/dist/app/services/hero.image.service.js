"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HeroImageService = (function () {
    function HeroImageService(http) {
        this.http = http;
        this.imgUrl = 'https://gateway.marvel.com:443/v1/public/characters';
        this.params = '?ts=1&apikey=c4ea4cfb65c9023aa3b6e48d64b92d81&hash=0ddae0d8ac22c2587d1a8a92225499e1';
    }
    HeroImageService.prototype.getImg = function (id) {
        var url = this.imgUrl + "/" + id + this.params;
        console.log("Hero Object: ", this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError));
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroImageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroImageService);
    return HeroImageService;
}());
exports.HeroImageService = HeroImageService;
//# sourceMappingURL=hero.image.service.js.map