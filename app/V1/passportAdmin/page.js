import { PhoneVerification } from "@/components/Landing/PhoneVerificationSignUp/PhoneVerificationSignUp";
import { PhoneVerificationSignIn } from "@/components/PassportAdminSignInPage/PhoneVerificationSignIn/PhoneVerificationSignIn";
import { NavBar } from "@/components/NavBar/NavBar";

export default function SignInPassportAdmin() {
  return (
    <section>
      <NavBar />
      <PhoneVerificationSignIn />
    </section>
  );
}
