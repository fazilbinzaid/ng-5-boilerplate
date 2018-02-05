import { environment } from '@src/environments/environment';
import * as firebase from 'firebase';


const config = environment.firebase;


export default firebase.initializeApp(config);
