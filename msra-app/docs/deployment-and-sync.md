# Deployment & Sync

## Running locally

The app is fully static. Any of these work:

- `python3 server.py` then open `http://localhost:8077` (recommended — relative paths resolve correctly).
- Any static file server pointed at the `msra-app/` directory.
- Opening `index.html` directly in a browser (works, but a server is cleaner for the in-browser Babel step).

It runs entirely offline once loaded — React, ReactDOM, Babel and Firebase are all vendored locally and all data is local.

## Hosting (e.g. GitHub Pages)

Push the `msra-app/` folder to a repo and enable GitHub Pages. Because every dependency is vendored and every path is relative, no build step is needed — it serves as-is. On iOS, "Add to Home Screen" gives a full-screen web-app icon (the manifest meta tags and apple-touch-icon are set in `index.html`).

## Cross-device sync (optional, off by default)

Sync is **disabled** until a Firebase project is supplied. With it off, everything is saved per-device in `localStorage` and the Sync button shows a neutral "saved locally" state.

To enable it:

1. Create a free Firebase project at <https://console.firebase.google.com>.
2. Enable **Cloud Firestore**.
3. Copy the web-app config into `firebase-config.js` and uncomment the `window.FIREBASE_CONFIG = { ... }` assignment.
4. Set Firestore security rules so each document is reachable only by someone who knows its sync code (the 16-character code acts as a capability key). A minimal rule:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /sync/{code} {
         allow read, write: if code.size() >= 12;
         match /notes/{noteId} { allow read, write: if true; }
       }
     }
   }
   ```

   This is convenience-grade security, appropriate for personal study data — anyone with the exact code can read/write that one document.

## Firestore document shape

One document per sync code, in the `sync` collection:

```
sync/{syncCode}
  hoursPerWeek, statuses, statusChangedAt, notebookBookmarks,
  qbankProgress, dilemmasProgress, examDate, planStart, updatedAt
  notes/{conditionId} -> { dataUrl, updatedAt }   // sub-collection; Pencil PNGs
```

The main document is read on connect, then watched with `onSnapshot`; local changes are written debounced (700 ms). A guard ref prevents echo loops. Pencil notes live in the `notes` sub-collection (kept separate because PNGs can exceed the 1 MB document limit). To change which fields sync, edit **both** the snapshot reader and the debounced writer in `App`.

## What's synced vs per-device

Synced: hours/week, statuses + timestamps, notebook bookmarks, CPS progress, Professional Dilemmas progress, exam date, plan start, and (via the sub-collection) Pencil notes. Per-device only: the current view, active specialty, tracker mode, last notebook section, pen-only toggle, and the onboarding flag.
