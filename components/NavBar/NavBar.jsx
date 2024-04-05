import rotaryImg from "@/public/rotary.png";
import Image from "next/image";
export function NavBar() {
  return (
    <section className="w-full h-auto z-50 flex justify-center py-[10px]">
      <div className="w-[90%] ">
        <Image
          className="lg:w-[16vw] md:w-[16vw] xl:w-[16vw] 2xl:w-[16vw] w-[50vw]"
          src={rotaryImg}
        />
      </div>
    </section>
  );
}
