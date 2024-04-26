import { PhoneVerification } from "@/components/Landing/PhoneVerificationSignUp/PhoneVerificationSignUp";
import { PhoneVerificationSignIn } from "@/components/VisaAdminSignInPage/PhoneVerificationSignIn/PhoneVerificationSignIn";
import { NavBar } from "@/components/NavBar/NavBar";

export default function SignInVisaAdmin() {
  return (
    <section>
      <NavBar />
      <PhoneVerificationSignIn />
    </section>
  );
}
