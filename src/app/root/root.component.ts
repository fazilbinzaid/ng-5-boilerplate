import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    public location: Location,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('init auth.authState', this.auth)
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}
