import rotaryImg from "@/public/rotary.png";
import Image from "next/image";
export function NavBar() {
  return (
    <section className="w-full h-auto z-50 flex justify-center pt-[20px]">
      <div className="w-[90%] ">
        <Image src={rotaryImg} />
      </div>
    </section>
  );
}
