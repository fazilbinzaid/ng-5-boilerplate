import firebase from './config';

import 'firebase/messaging';


const messaging = firebase.messaging();
console.log({messaging})

messaging.requestPermission().then(response => {
	console.log({response})
	getToken();
}).catch(error => {
	console.log({error})
});

const getToken = () => {
	console.log('getToken')
	return messaging.getToken()
		.then((currentToken) => {
			if (currentToken) {
				// sendTokenToServer(currentToken);
				// updateUIForPushEnabled(currentToken);
				console.log({currentToken})
			}
		})
		.catch((error) => {
			console.log({error})
		})
}