import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

export default async function PasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
