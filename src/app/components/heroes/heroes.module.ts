import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list-component/hero-list-component.component';
import { HeroDetailComponent } from './hero-detail-component/hero-detail-component.component';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroService } from '../../services/hero.service';


@NgModule({

	imports: [
		HeroesRoutingModule,
		CommonModule,
		FormsModule,
	],

	declarations: [
		HeroListComponent,
		HeroDetailComponent,
	],

	providers: [
		HeroService
	]

})

export class HeroesModule {}