import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
<<<<<<< HEAD
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

=======
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
import { AppModule } from './app/components/app-component/app.module';
import { environment } from './environments/environment';

import * as firebase from 'firebase';


<<<<<<< HEAD
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule);
=======
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

var config = {
  apiKey: "AIzaSyA1MQYjRbYDLrr8iHtnaoWDvH6tt1L5BYw",
  authDomain: "leaftro-test.firebaseapp.com",
  databaseURL: "https://leaftro-test.firebaseio.com",
  projectId: "leaftro-test",
  storageBucket: "leaftro-test.appspot.com",
  messagingSenderId: "647586025084"
};
<<<<<<< HEAD
firebase.initializeApp(config);
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
=======
firebase.initializeApp(config);
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
