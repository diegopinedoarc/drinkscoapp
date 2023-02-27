import { initializeApp } from "firebase/app";
import {
  firebaseConfig,
  actionCodeSettingsVerification,
  actionCodeSettingsForgotPassword,
} from "./firebaseconfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getDoc,
  doc,
  setDoc,
  getFirestore,
  orderBy,
  collection,
  where,
  query,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
// Iniializo firebase con la configuracion
const app = initializeApp(firebaseConfig);
//Traigo los datos de la app desde firebase
export const firestore = getFirestore(app);
//Genero un provider para el login
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUser = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>
    sendEmailVerification(
      userCredential.user,
      actionCodeSettingsVerification
    ).then(() => {
      alert(`Email de verificacion enviado a ${email}`);
      localStorage.setItem("username", displayName);
    })
  );

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth || !userAuth.emailVerified) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem("username"),
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("Error al crear el usuario", error.message);
    }
  }
  return userRef;
};

export const auth = getAuth();
auth.useDeviceLanguage();

export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
    () => alert(`Mail de recupero de contraseña enviado a ${email}`)
  );
export const createOrderDocument = async (order) => {
  if (!order) return;
  const orderRef = doc(firestore, `orders/${order.orderId}`);
  const snapShot = await getDoc(orderRef);
  if (!snapShot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, `orders/${order.orderId}`), {
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.cartItems],
        price: order.price,
        shippingCost: order.shippingCost,
        total: order.total,
        status: "pending",
        createdAt,
      });
    } catch (error) {
      console.log("Error creando el pedido", error.message);
    }
  }
  return orderRef;
};

export const getOrders = async (userId, currentOrdersInRedux, cb, action) => {
  if (!userId) throw new Error("");
  const getOrdersQuery = query(
    collection(firestore, "orders"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  let orders = await getDocs(getOrdersQuery)
    .then((querySnapshot) => {
      let orders = [];
      querySnapshot.forEach(async (document) => {
        orders = [...orders, { id: document.id, ...document.data() }];
        const orderRef = doc(firestore, `orders/${document.id}`);
        let documentStatus = document.data().status;
        if (!currentOrdersInRedux) {
          onSnapshot(orderRef, (snapShot) => {
            const staleData = snapShot.get("status") !== documentStatus;
            documentStatus = snapShot.get("status");
            staleData && cb(action(userId));
          });
        }
      });
      return orders;
    })
    .catch((error) => console.log("Error al obtener las ordenes", error));
  return orders;
};
