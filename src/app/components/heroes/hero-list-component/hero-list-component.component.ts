import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hero, HeroService } from '../../../services/hero.service';


@Component({
  selector: 'app-hero-list-component',
  templateUrl: './hero-list-component.component.html',
  styleUrls: ['./hero-list-component.component.css']
})

export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      });
  }

}
