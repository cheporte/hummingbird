![Banner](./img/hummingbird-banner.png)


<div align=center>

# 🌸 Hummingbird 🐦

</div>

A minimalist Twitter-like mobile app built with **React Native (Expo)** and **Firebase**, where users can chirrp short posts with images — poetic blurbs, code-thoughts, and pixel dreams.

---

## ✨ Features

- 📰 **Feed**: View all chirrps in a cozy scrollable stream
- 📝 **Create Post**: Add a new chirrp with text (soon with optional image)
- 👤 **Profile**: View your profile with avatar and bio

---

## 🛠️ Tech Stack

<div align=center>

|  Feature   |                                                           Technology                                                            |
|:----------:|:-------------------------------------------------------------------------------------------------------------------------------:|
| Framework  |        ![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)        |
|  Bundler   |                 ![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)                 |
|  Backend   |           ![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)           |
|  Database  |          ![Firestore](https://img.shields.io/badge/Firestore-ffca28?style=for-the-badge&logo=Firebase&logoColor=black)          |
|  Language  |        ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)        |
| Navigation | ![React Navigation](https://img.shields.io/badge/React_Navigation-000000?style=for-the-badge&logo=react-router&logoColor=white) |

</div> 




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
3. Run the app and scan QR with Expo Go app installed on your phone:
    ```bash
    npx expo start # add --android to start your Android emulator 
    ```

## 📸 Preview

<div align=center>

### Login/Signup Screens

</div>
<div align=center>

<img src="./img/previews/login_preview.jpg" width="150"/>
<img src="./img/previews/signup_preview.jpg" width="150"/>

</div>

<div align=center>

### Fead / New Chirrp / Profile Screens

</div>
<div align=center>

<img src="./img/previews/feed_preview.jpg" width="150"/>
<img src="./img/previews/new_chirrp_preview.jpg" width="150"/>
<img src="./img/previews/profile_preview.jpg" width="150"/>

</div>

<div align=center>

### Update Profile Screen

</div>
<div align=center>

<img src="./img/previews/profile_update_preview.jpg" width="150"/>

</div>

## 🔮 Roadmap
- Image uploads to Firebase Storage (when I manage to create a billing account 🫠)
- Like / comment system
- Improve CSS styles
- Maybe some other features, I haven't decided yet (feel free to suggest 👀✨)

## 🌈 Contributing
Open an issue, fork the repo, create a PR.
Every chirrp counts 🐤✨

## 📜 License
MIT — free to fly and remix

## 🪶 Final Note
Hummingbird is a poem disguised as an app.
Each post is a feather. Together we fly. 🌸

---

Made with 💖 by your humble Ché-Ché