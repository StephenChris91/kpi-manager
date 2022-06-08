import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

//import { ​​collection, ​​addDoc} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export default function useSignup() {
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: user });
    } catch (error) {
      console.log(error);
    }
  };

  return { signup };
}
