import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: '../app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }

    getHero(id: number): Promise<Hero> {
      return this.heroService.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    goBack(): void {
      this.location.back();
    }
}