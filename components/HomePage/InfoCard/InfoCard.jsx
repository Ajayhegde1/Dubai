"use client";
import { homePageStyles } from "@/app/Styles/HomePageStyles";
import progBgImg from "@/public/profbg.svg";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
export function InfoCard() {
  return (
    <section className="w-full lg:h-[20vh] xl:h-[20vh] 2xl:h-[20vh] md:h-[20vh] h-[30vh] flex justify-center bg-white">
      <div className="ast w-[100%] h-full rounded-xl shadow-lg drop-shadow-xl px-2">
        <div className="h-[20%] w-full border-gray-500">
          <h1 className="text-[30px] font-[800] px-[1vw]  text-blue-900 mt-[-10px]">
            Welcome Manoj
          </h1>
          <div className="w-[100%] h-[2px] bg-black mb-[5px]"></div>
        </div>
        <div className="flex h-[80%] mt-[10px]">
          <div className="w-[70%] h-full  grid grid-cols-2 px-[1vw]">
            <div className="flex flex-col justify-evenly">
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                Rotary No. :{" "}
                <span className={`${homePageStyles.infoCardStyleSpan}`}>
                  12345
                </span>
              </h1>
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                Phone No. :{" "}
                <span className={`${homePageStyles.infoCardStyleSpan}`}>
                  9787656781
                </span>
              </h1>
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                Email ID :{" "}
                <span className={`${homePageStyles.infoCardStyleSpan}`}>
                  manoj@gmail.com
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                Passport No. :{" "}
                <span className={`${homePageStyles.infoCardStyleSpan}`}>
                  ABJ123
                </span>
              </h1>
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                Visa No. :{" "}
                <span className={`${homePageStyles.infoCardStyleSpan}`}>
                  TTR452
                </span>
              </h1>
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                Medical Issues :{" "}
                <span className={`${homePageStyles.infoCardStyleSpan}`}>
                  None
                </span>
              </h1>
            </div>
          </div>

          <div className="w-[30%] h-full flex justify-end pr-[4vw] items-center">
            <Image height={102} src={progBgImg} />
          </div>
        </div>
        <h1></h1>
      </div>
    </section>
  );
}
