import { PhoneVerification } from "@/components/Landing/PhoneVerificationSignUp/PhoneVerificationSignUp";
import { PhoneVerificationSignIn } from "@/components/Landing/PhoneVerificationSignIn/PhoneVerificationSignIn";
import { NavBar } from "@/components/NavBar/NavBar";

export default function SignInPage() {
  return (
    <section>
      <NavBar />
      <PhoneVerificationSignIn />
    </section>
  );
}
