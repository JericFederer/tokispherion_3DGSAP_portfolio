import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { enExpCards, jpExpCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ language }) => {
  useGSAP(() => {
    // Animate the height of the timeline div from 0% to 100% to "draw" it.
    gsap.from(".timeline-inner", {
      height: "0%",
      scrollTrigger: {
        trigger: "#experience-wrapper",
        start: "top center",
        // End the animation when the bottom of the trigger hits the bottom of the viewport.
        // This ensures the line is fully drawn as you scroll through the entire section.
        end: "bottom-=150 bottom", // End a little before the absolute bottom for a better feel
        scrub: true,
      },
    });

    // A single timeline for all card animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience", // Use the section as the main trigger
        start: "top 60%", // Start animations when the top of the section is 60% from the top of the viewport
        end: "bottom bottom",
      },
    });

    // Animate all cards and text blocks within the same timeline
    gsap.utils.toArray(".exp-card-wrapper").forEach((wrapper) => {
      const card = wrapper.querySelector(".timeline-card");
      const text = wrapper.querySelector(".expText");

      tl.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
      }, "<0.2"); // Stagger the start of each card animation slightly

      tl.from(text, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "<"); // Animate the text at the same time as its corresponding card
    });
  }, [language]);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title={language == 'en' ? "Professional Work Experience" : "職務経験"}
          sub={language === 'en' ? "My Career Overview" : "キャリア概要"}
        />
        <div className="mt-32 relative" id="experience-wrapper">
          {/* Single timeline element positioned absolutely to the wrapper */}
          {/* The outer div acts as a mask for the inner line animation */}
          <div className="timeline-wrapper absolute top-0 bottom-0 overflow-hidden">
            {/* This inner div's height will be animated */}
            <div className="timeline-inner h-full" />
            <div className="gradient-line w-1 h-full" />
          </div>
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {language === 'en'
              ? enExpCards.map((card, index) => (
                  <div key={card.title} className="exp-card-wrapper">
                    <div className="xl:w-2/6 timeline-card">
                      <GlowCard card={card}>
                        <div>
                          {/* <img src={card.imgPath} alt="exp-img" /> */}
                        </div>
                      </GlowCard>
                    </div>
                    <div className="xl:w-4/6 expText">
                      <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                          <div className="timeline-logo">
                            <img src={card.logoPath} alt="logo" />
                          </div>
                          <div>
                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                            <p className="my-5 text-white-50">
                              🗓️&nbsp;{card.date}
                            </p>
                            <p className="text-[#839CB5] italic">
                              Responsibilities
                            </p>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map(
                                (responsibility, index) => (
                                  <li key={index} className="text-lg">
                                    {responsibility}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                      </div>
                    </div>
                  </div>
                ))
              : jpExpCards.map((card, index) => (
                  <div key={card.title} className="exp-card-wrapper">
                    <div className="xl:w-2/6 timeline-card">
                      <GlowCard card={card}>
                        <div>
                          {/* <img src={card.imgPath} alt="exp-img" /> */}
                        </div>
                      </GlowCard>
                    </div>
                    <div className="xl:w-4/6 expText">
                      <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                          <div className="timeline-logo">
                            <img src={card.logoPath} alt="logo" />
                          </div>
                          <div>
                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                            <p className="my-5 text-white-50">
                              🗓️&nbsp;{card.date}
                            </p>
                            <p className="text-[#839CB5] italic">
                              Responsibilities
                            </p>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map(
                                (responsibility, index) => (
                                  <li key={index} className="text-lg">
                                    {responsibility}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
