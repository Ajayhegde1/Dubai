import AdminControlDiv from "@/components/AdminPage/AdminControlDiv/AdminControlDiv";
import PassportDiv from "@/components/AdminPage/PassportDiv/PassportDiv";
import PaymentStatsDiv from "@/components/AdminPage/PaymentStatsDiv/PaymentStatsDiv";
import RegistrationDiv from "@/components/AdminPage/RegistrationsDiv/RegistrationDiv";
import RevenueDiv from "@/components/AdminPage/RevenueDiv/RevenueDiv";
import VisaDiv from "@/components/AdminPage/VisaDiv/VisaDiv";
import { NavBar } from "@/components/NavBar/NavBar";

export default function adminPage() {
  return (
    <>
      <NavBar />
      <AdminControlDiv />
      <PaymentStatsDiv />
      <RegistrationDiv />
      <RevenueDiv />
      <VisaDiv />
      <PassportDiv />
    </>
  );
}
