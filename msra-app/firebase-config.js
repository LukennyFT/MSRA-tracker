// Firebase configuration for cross-device sync.
//
// Safe to commit publicly: security is enforced by Firestore rules + the
// unguessable 16-character sync code, not by hiding these keys. The app reads
// window.FIREBASE_CONFIG and initialises Firebase itself, so no import/
// initializeApp lines are needed here.
//
// To enable sync you must also publish the Firestore security rules — see
// docs/deployment-and-sync.md (Firestore → Rules tab).

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyC36XZY7atzDy7TuDFmlbeyHMWo2wSO1eQ",
  authDomain: "msra-revision-app.firebaseapp.com",
  projectId: "msra-revision-app",
  storageBucket: "msra-revision-app.firebasestorage.app",
  messagingSenderId: "162171784579",
  appId: "1:162171784579:web:a2fb1575e2582f06b43ab6"
};
