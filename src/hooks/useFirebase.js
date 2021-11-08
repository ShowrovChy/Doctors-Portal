import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isAdmin, setIsAdmin] = useState(false);
  const handleUserRegister = (email, password, history, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setUser(result.user);
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        //save name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setAuthError(error.message);
          });

        history.replace("/");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUserLogin = (email, password, location, history) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //google login
  const GoogleLogIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location.state.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          // console.log(idToken);
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.admin);
      });
  }, [user.email]);
  const logOut = () => {
    setIsLoading(true);

    signOut(auth)
      .then(setUser({}))
      .finally(() => {
        setIsLoading(false);
      });
  };

  //save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    token,
    logOut,
    isLoading,
    authError,
    isAdmin,
    GoogleLogIn,
    handleUserLogin,
    handleUserRegister,
  };
};
export default useFirebase;
