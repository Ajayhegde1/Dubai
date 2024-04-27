import rotaryImg from "@/public/rotary.png";
import Image from "next/image";
export function NavBar() {
  return (
    <section className="w-full h-auto z-50 flex justify-center py-[10px]">
      <div className="w-[90%] ">
        <Image
          className="lg:w-[8vw] md:w-[8vw] sm:w-[16vw] xl:w-[8vw] 2xl:w-[8vw] w-[25vw]"
          src={rotaryImg}
        />
      </div>
    </section>
  );
}
