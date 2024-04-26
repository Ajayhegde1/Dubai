import { PhoneVerificationSignIn } from "@/components/AdminSignInPage/PhoneVerificationSignIn/PhoneVerificationSignIn";
import { NavBar } from "@/components/NavBar/NavBar";

export default function SignInAdmin() {
  return (
    <section>
      <NavBar />
      <PhoneVerificationSignIn />
    </section>
  );
}
