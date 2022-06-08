import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";

export default function useLogin() {
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: auth.currentUser });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return { login };
}
