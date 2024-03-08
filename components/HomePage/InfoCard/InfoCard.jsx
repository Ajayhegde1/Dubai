"use client";
import { homePageStyles } from "@/app/Styles/HomePageStyles";
import progBgImg from "@/public/profbg.png";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
export function InfoCard() {
  // const cardRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ast",
          start: "top top",
          scrub: true,
          // markers:true,
        },
      })
      .from(".ast", {
        position: "relative",
      })
      .to(".ast", {
        position: "fixed",
        // top:0,
        zIndex: 100,
        duration: 200,
        ease: 5,
        scaleX: 1.05,
      });
  }, []);
  return (
    <section className=" w-full h-[30vh] flex justify-center">
      <div className="ast w-[98%] h-full rounded-xl shadow-lg drop-shadow-xl">
        <div className="h-[30%] w-full border-b-2 border-gray-500">
          <h1 className="text-[50px] font-[700] px-[1vw]  text-blue-900">Welcome Manoj</h1>
        </div>
        <div className="flex h-[70%]">
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
                  Manoj@gmail.com
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <h1 className={`${homePageStyles.infoCardStyleHead}`}>
                PassPort No. :{" "}
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
            <Image height={150} src={progBgImg} />
          </div>
        </div>
        <h1></h1>
      </div>
    </section>
  );
}
