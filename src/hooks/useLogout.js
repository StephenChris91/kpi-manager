import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export default function useLogout() {
  const { dispatch } = useAuthContext();
  const logout = async () => {
    try {
      signOut(auth);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
}
