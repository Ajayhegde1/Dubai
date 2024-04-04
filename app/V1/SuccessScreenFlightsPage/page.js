import { NavBar } from "@/components/NavBar/NavBar";
import SuccessScreenFlightsComponent from "@/components/SuccessScreenFlightsComponent/SuccessScreenFlightsComponent";

export default function SuccessScreenFlightsPage() {
  return (
    <section>
      <NavBar />
      <SuccessScreenFlightsComponent routing={"/V1/PaymentGatewayPage"} />
    </section>
  );
}
