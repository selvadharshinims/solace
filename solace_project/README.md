# 🌿 Solace – Elderly Care Community Platform

A responsive web app for elderly residents and community admins.  
No framework. No server. Just 3 HTML files + Firebase.

---

## 📁 Project Files

| File | What it is |
|------|------------|
| `index.html` | **Resident App** — Login, Home, Emergency, Help, Activities, Notices, Mood, Chat, Profile, Voice |
| `admin.html` | **Admin Panel** — Dashboard, Residents, Activities, Notices, Requests, Check-ins & Mood |
| `firebase-config.js` | **Configuration** — Edit this once with your Firebase values |
| `SETUP_GUIDE.html` | **Firebase Setup** — Step-by-step visual guide (open in browser) |
| `README.md` | This file |

---

## 🚀 Quick Start (Demo Mode — no setup needed)

1. Open `index.html` in Chrome
2. Pick any apartment from the dropdown and enter the passcode:

| Apartment | Passcode |
|-----------|----------|
| A-101 | 1234 |
| A-305 | 5678 |
| B-102 | 2345 |
| B-204 | 6789 |

3. Open `admin.html` → login: `admin` / `admin123`

> In Demo Mode, data is saved to browser localStorage. It works fully but won't sync between devices.

---

## 🔥 Connect Firebase (Real Sync Across Devices)

1. Open **`SETUP_GUIDE.html`** in your browser — full step-by-step guide
2. Create a free Firebase project at https://console.firebase.google.com
3. Copy your config values into **`firebase-config.js`**
4. Done — all devices sync in real time

---

## 📱 Resident App Features

- **Login** — Apartment dropdown + passcode (no username to remember)
- **Home** — Daily quote, greeting, check-in, 6 quick tiles
- **Voice Assistant** — Chrome Android compatible, text fallback
- **Emergency** — Call ambulance (108), police (100), personal contacts, community alert
- **Ask for Help** — 5 categories, submit with notes, track status live
- **Activities** — Today's schedule, synced from admin
- **Notices** — Community updates, synced from admin
- **Mood** — 6 mood options + notes
- **Flat Chat** — Per-apartment messaging
- **Profile** — Stats, quick call, family contacts

## ⚙️ Admin Panel Features

- **Dashboard** — Live stats across all apartments
- **Residents** — Add/edit/delete apartments, set passcodes, emergency contacts
- **Activities** — Add/remove schedule entries → syncs instantly to all residents
- **Notices** — Post/delete notices → syncs instantly to all residents
- **Help Requests** — Filter, mark complete/rejected/pending, delete
- **Check-ins & Mood** — Wellbeing overview per apartment, full history

---

## 🗄️ Firebase Database Structure

```
solace-db/
├── apartments/
│   ├── A-305/
│   │   ├── passcode: "5678"
│   │   ├── name: "selvadharshini"
│   │   ├── email: "..."
│   │   └── contacts: [{name, phone}, ...]
│   └── B-102/ ...
├── activities/
│   └── {key}: { time, name, location }
├── notices/
│   └── {key}: { tag, title, body, date }
├── requests/
│   └── A-305/
│       └── {key}: { type, notes, date, status, name }
├── checkins/
│   └── A-305/
│       └── {key}: { date, mood, name }
├── moodLog/
│   └── A-305/
│       └── {key}: { date, emoji, label, note }
└── chat/
    └── A-305/
        └── {key}: { text, sender, time }
```

---

## 🔒 Firebase Security Rules

Paste these in Firebase Console → Realtime Database → Rules:

```json
{
  "rules": {
    "apartments": {
      ".read": true,
      ".write": false,
      "$apt": { ".write": true }
    },
    "activities": { ".read": true, ".write": false },
    "notices":    { ".read": true, ".write": false },
    "requests":   { "$apt": { ".read": true, ".write": true } },
    "checkins":   { "$apt": { ".read": true, ".write": true } },
    "moodLog":    { "$apt": { ".read": true, ".write": true } },
    "chat":       { "$apt": { ".read": true, ".write": true } }
  }
}
```

---

## 🌐 Hosting Options (to access from any device)

| Option | Cost | Speed |
|--------|------|-------|
| Firebase Hosting | Free | 2 min setup |
| Netlify Drop | Free | 30 seconds |
| GitHub Pages | Free | 5 min |

> ⚠️ Voice assistant requires HTTPS. Use any hosting above (not `file://`)

---

## 🛠️ Tech Stack

- Pure HTML5 + CSS3 + Vanilla JavaScript (ES Modules)
- Firebase Realtime Database v10 (CDN, no npm needed)
- Google Fonts: Playfair Display + DM Sans
- No build step. No Node.js. No npm. Open and run.

---

*Solace v2.0 — Built for community care*
