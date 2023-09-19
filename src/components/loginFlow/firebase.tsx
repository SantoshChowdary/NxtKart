// import { FirebaseApp, initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { FcGoogle } from 'react-icons/fc';
// import './index.css'

// interface FirebaseConfig {
//     apiKey: string;
//     authDomain: string;
//     projectId: string;
//     storageBucket: string;
//     messagingSenderId: string;
//     appId: string;
// }

// const firebaseConfig: FirebaseConfig = {
//   apiKey: "AIzaSyAupuMaA0Q23NqfdxZGSMPCVvybrQp8paE",
//   authDomain: "chat-1f4b9.firebaseapp.com",
//   projectId: "chat-1f4b9",
//   storageBucket: "chat-1f4b9.appspot.com",
//   messagingSenderId: "1042788539031",
//   appId: "1:1042788539031:web:ca3142cb497eae561767d2"
// };

// const appConfig: FirebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(appConfig)
// const provider: GoogleAuthProvider = new GoogleAuthProvider()

// const FirebaseLogin = () => {

//     const getSignIn = () => {
//         signInWithPopup(auth, provider).then(response => console.log(response)).catch(error => console.log(error))
//     }

//     return (
//         <button type='button' className="google-button" onClick={getSignIn}>
//             <FcGoogle className='google-icon' />
//         </button>
//     )
// }


// export default FirebaseLogin

export default {}