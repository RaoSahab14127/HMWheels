// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdomUYDhLExXErBJW4UqSTJd00hKCtrCc",
  authDomain: "hm-wheels-97c2f.firebaseapp.com",
  projectId: "hm-wheels-97c2f",
  storageBucket: "hm-wheels-97c2f.appspot.com",
  messagingSenderId: "95423281104",
  appId: "1:95423281104:web:7f5965986f8cef21e86bd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function signUpFirebase(userInfo) {
  const { email, password } = userInfo;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await addUserToDb(userInfo, userCredential.user.uid);
}

function signInFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function addUserToDb(userInfo, uid) {
  const { email, fullName } = userInfo;

  return setDoc(doc(db, "users", uid), { email, fullName });
}

function postAdToDb(
  city,
  carinfo,
  color,
  km,
  price,
  description,
  imageUrl,
  no,
  secno,
  address
) {
  const userId = auth.currentUser.uid;
  return addDoc(collection(db, "ads"), {
    city,
    carinfo,
    color,
    km,
    price,
    description,
    imageUrl,
    no,
    secno,
    address,
    userId,
  });
}

async function uploadImage(image) {
  const storageRef = ref(storage, `image/${image.name}`);
  const snapshot = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(snapshot.ref);
  return url;
}
function getRealTimeAds(callback) {
  onSnapshot(collection(db, "ads"), (querySnapshot) => {
    const ads = [];

    querySnapshot.forEach((doc) => {
      ads.push({ id: doc.id, ...doc.data() });
    });
    callback(ads);
  });
}

export {
  signUpFirebase,
  signInFirebase,
  postAdToDb,
  uploadImage,
  getRealTimeAds,
};
