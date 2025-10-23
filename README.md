# React Firebase App (Netflix Clone ) 

This is a React application that uses Firebase Authentication to manage user login/logout and routes users to different pages based on their authentication status.

## Features

* **Authentication**: Integrates Firebase Authentication for user login and session management.
* **Routing**: Uses React Router for navigation between different pages.
* **Pages**:

  * **Home**: The main landing page of the app, accessible only when the user is logged in.
  * **Login**: A login page to allow users to authenticate themselves using Firebase.
  * **Player**: Displays detailed information about a specific player. URL parameters are used to fetch player details.
  * **New Player**: Allows authenticated users to create a new player profile.

## Technologies Used

* **React**: Frontend JavaScript library.
* **Firebase**: Firebase Authentication for managing user sessions.
* **React Router**: For routing between pages in the app.
* **React Toastify**: To show toast notifications (success, error, etc.).
* **CSS**: For styling.

## Installation

To get started with this project, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install Dependencies 🔨

Install the required npm packages:

```bash
npm install
```

### Set Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project (or use an existing one).
2. Go to the **Authentication** section and enable **Email/Password** sign-in method.
3. In the Firebase console, get your Firebase configuration object from the **Project settings** and update your `firebase.js` file with the configuration:

```js
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
```

## Usage

1. **Login**: Navigate to `/login` and sign in using your Firebase Authentication method (email/password).
2. **Home Page**: Once logged in, you'll be redirected to the home page (`/`).
3. **Player Page**: You can view detailed information about players by visiting `/player/:id` where `:id` is the player's ID.
4. **Create New Player**: Authenticated users can go  `/user` to create a new player profile.

### Start the App

Run the app locally in development mode:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Folder Structure

```plaintext
src/
│
├── pages/               # Contains all pages (Home, Login, Player, NewPlayer)
│   ├── Home/
│   ├── Login/
│   ├── Player/
│   └── NewPlayer/
│
├── App.js               # Main app component with routing and authentication check
├── firebase.js          # Firebase configuration and authentication setup
├── App.css              # Global styles for the app
└── index.js             # Entry point for the React app
```

## Troubleshooting

* Ensure that your Firebase project is correctly set up and configured.
* Make sure to check the browser console for any errors related to Firebase Authentication.

---

### License

This project is licensed under the MIT License.

