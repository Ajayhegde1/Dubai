import VisaDiv from "@/components/AdminPage/VisaDiv/VisaDiv";
import { NavBar } from "@/components/NavBar/NavBar";

import { VisaAdminControlDiv } from "@/components/VisaAdminPage/VisaAdminControlDiv/VisaAdminControlDiv";

export default function VisaAdminPage() {
  return (
    <>
      <NavBar />
      <VisaAdminControlDiv />

      <VisaDiv />
    </>
  );
}
