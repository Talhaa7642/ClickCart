import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBmQVWOrPD8TkCwZvZ6q7OogQ-0jWXwEms',
  authDomain: 'mymoney-b5645.firebaseapp.com',
  projectId: 'mymoney-b5645',
  storageBucket: 'mymoney-b5645.appspot.com',
  messagingSenderId: '881948326631',
  appId: '1:881948326631:web:2e8dba72a3f19c24ae0042',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const auth = getAuth();

export const db = getFirestore();
export const userRef = collection(db, 'users');
export const storeRef = collection(db, 'stores');
export const categoryRef = collection(db, 'categories');
export const productRef = collection(db, 'products');

getDocs(storeRef)
  .then(snapshot => {
    let stores = [];
    snapshot.docs.forEach(el => {
      stores.push({...el.data(), id: el.id});
    });
  })
  .catch(err => console.log('store docs err', err));
