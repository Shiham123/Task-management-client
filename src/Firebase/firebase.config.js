import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCZKPnhfWLsOsfm34XS3Cg9xA7rebYoRdQ',
  authDomain: 'task-management-e19dd.firebaseapp.com',
  projectId: 'task-management-e19dd',
  storageBucket: 'task-management-e19dd.appspot.com',
  messagingSenderId: '878137390668',
  appId: '1:878137390668:web:1b5596e6da9475732fa6e9',
};

const app = initializeApp(firebaseConfig);
const globalAuth = getAuth(app);
export default globalAuth;
