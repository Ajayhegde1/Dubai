import { PhoneVerificationSignIn } from "@/components/Landing/PhoneVerificationSignIn/PhoneVerificationSignIn";
import { PhoneVerificationSignUp } from "@/components/Landing/PhoneVerificationSignUp/PhoneVerificationSignUp";
import { NavBar } from "@/components/NavBar/NavBar";

export default function SignInUpPage() {
  return (
    <section>
      <NavBar />
      <PhoneVerificationSignUp />
    </section>
  );
}
