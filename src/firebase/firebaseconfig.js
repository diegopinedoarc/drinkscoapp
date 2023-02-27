export const firebaseConfig = {
  apiKey: "AIzaSyCCrO3fgDW__JHuyLRt9XMA2StctrIDcxA",

  authDomain: "drinkscoapp.firebaseapp.com",

  projectId: "drinkscoapp",

  storageBucket: "drinkscoapp.appspot.com",

  messagingSenderId: "183659453210",

  appId: "1:183659453210:web:9ae7a75546e7d3863c6aa3",
};

export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://drinkscoapp.web.app",
};
export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/login"
      : "https://drinkscoapp.web.app",
};
