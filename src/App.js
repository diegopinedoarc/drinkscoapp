import "./App.css";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";
import * as userActions from "./redux/user/user-actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      onSnapshot(userRef, (snapShot) =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => unsuscribe();
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
