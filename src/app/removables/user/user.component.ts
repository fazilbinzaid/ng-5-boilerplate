import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

	key: string = '-L4dPQjl8fImadbKHifj';
	editedTime$: Observable<any>;
	serverTime$: Observable<any>;
	flagObjectRef: AngularFireObject<any>;
	flagListRef: AngularFireList<any>;
	serverTime: AngularFireObject<any>;
	serverTimestamp: number;
	clientTimestamp: number;

  constructor(
  	private database: AngularFireDatabase
  ) {

  	this.flagObjectRef = this.database.object('flags');
  	this.flagListRef = this.database.list('flags');
  	this.serverTime = this.database.object('/.info/serverTimeOffset');
  	this.editedTime$ = this.database.object(`flags/${this.key}`).valueChanges();

  }

  ngOnInit() {

  	this.calculateTime();

  	// setInterval(this.calculateTime.bind(this), 5000)

  }

  monitorServerTime() {

  	this.serverTime$ = this.serverTime.valueChanges();

  	let serverTime = this.serverTime$.subscribe(stime => {
  		this.clientTimestamp = +stime + Date.now();
  	})
  	setTimeout(() => {
  		serverTime.unsubscribe();
  	}, 30000)

  }

  calculateTime() {

  	let newItem = this.editedTime$.subscribe(item => {
  		this.serverTimestamp = +item.time + 30001;
  		this.monitorServerTime();
  	})
  	setTimeout(() => {
  		newItem.unsubscribe();
  	}, 3000)
  }

  startTimer() {
  	this.flagListRef.update(this.key, { time: firebase.database.ServerValue.TIMESTAMP });
  	this.calculateTime();
  }

}
