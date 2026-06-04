// Firebase configuration for cross-device sync (OPTIONAL).
//
// The app works fully offline using this browser's localStorage. Cross-device
// sync is an optional extra. To enable it:
//
//   1. Create a free Firebase project at https://console.firebase.google.com
//   2. Enable Cloud Firestore (in production mode).
//   3. Copy this project's web-app config object into FIREBASE_CONFIG below
//      and uncomment the assignment.
//   4. Set Firestore security rules so a document is readable/writable only by
//      someone who knows its 16-character sync code (see docs/deployment-and-sync.md).
//
// Until a real config is provided, window.FIREBASE_CONFIG stays undefined, the
// app detects that Firebase is unavailable, and the Sync button shows a neutral
// "saved locally" state — nothing breaks.

// window.FIREBASE_CONFIG = {
//   apiKey: "...",
//   authDomain: "your-project.firebaseapp.com",
//   projectId: "your-project",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "...",
//   appId: "...",
// };
