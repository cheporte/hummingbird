# 🌸 Hummingbird 🐦
*A tiny app with a loud voice.*  
A minimalist Twitter-like mobile app built with **React Native (Expo)** and **Firebase**, where users can chirrp short posts with images — poetic blurbs, code-thoughts, and pixel dreams.

---

## ✨ Features

- 📰 **Feed**: View all chirrps in a cozy scrollable stream
- 📝 **Create Post**: Add a new chirrp with text + optional image
- 👤 **Profile**: View your profile with avatar and bio

---

## 🛠️ Tech Stack

- **Frontend**: React Native + Expo
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Styling**: Plain CSS (well... `StyleSheet.create()` 😉)
- **Navigation**: React Navigation (Bottom Tabs)

---

## 🔧 Setup

> Make sure you have **Node**, **Expo CLI**, and **Firebase** configured.

```bash
git clone https://github.com/your-username/hummingbird.git
cd hummingbird
npm install
```
1. Register a Firebase Web App at console.firebase.google.com 
2. Copy your config to `app.config.js` under `extra`:
```js
export default {
  expo: {
    name: "Hummingbird",
    slug: "hummingbird",
    extra: {
      firebaseApiKey: "YOUR_API_KEY",
      firebaseAuthDomain: "yourapp.firebaseapp.com",
      firebaseProjectId: "yourapp",
      firebaseStorageBucket: "yourapp.appspot.com",
      firebaseMessagingSenderId: "YOUR_SENDER_ID",
      firebaseAppId: "YOUR_APP_ID",
    }
  }
};
```
3. Run the app:
```bash
npx expo start
```

## 📸 Preview
(Coming soon)

## 🔮 Roadmap
- Firebase Auth (sign up, login)
- Uploading posts to Firestore
- Real-time feed updates
- Image uploads to Firebase Storage
- Profile editing
- Like / comment system

## 🌈 Contributing
Open an issue, fork the repo, create a PR.
Every chirrp counts 🐤✨

## 📜 License
MIT — free to fly and remix

## 🪶 Final Note
Hummingbird is a poem disguised as an app.
Each post is a feather. Together we fly. 🌸