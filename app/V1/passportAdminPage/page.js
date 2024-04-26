import PassportDiv from "@/components/AdminPage/PassportDiv/PassportDiv";
import { NavBar } from "@/components/NavBar/NavBar";
import PassPortAdminControlDiv from "@/components/PassPortAdminPage/PassPortAdminControlDiv/PassPortAdminControlDiv";

export default function passportAdminPage() {
  return (
    <>
      <NavBar />
      <PassPortAdminControlDiv />

      <PassportDiv />
    </>
  );
}
