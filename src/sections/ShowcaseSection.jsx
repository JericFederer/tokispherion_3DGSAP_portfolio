import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = ({ language }) => {
  const sectionRef = useRef(null);
  const flowFundsRef = useRef(null);
  const startupRef = useRef(null);
  const othersRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [flowFundsRef.current, startupRef.current, othersRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, [language]);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={flowFundsRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="FlowFunds" />
            </div>
            <div className="text-content">
              {language === 'en'
                ? <h2>FlowFunds helps you manage daily spending and protect your savings offline with a calm design and logic built around real-life spending habits.</h2>
                : <h2>FlowFunds は、実際の支出習慣に基づいたロジックと落ち着いたデザインで、オフラインでも日々の支出管理と貯蓄の保護をサポートします。</h2>
              }
              {language === 'en'
                ? <p className="text-white-50 md:text-xl">
                    Currently in development using React Native, Expo, and React Native Paper, with release planned for the Apple App Store and Google Play in Q1 2026.
                  </p>
                : <p className="text-white-50 md:text-xl">
                    現在、React Native・Expo・React Native Paper を使用して開発中で、2026年 第1四半期に App Store および Google Play でのリリースを予定しています。
                  </p>
              }
              
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={startupRef}>
              <div className="image-wrapper bg-[#18181B]">
                <img
                  src="/images/project2.png"
                  alt="Startup Management Showcase App"
                />
              </div>
              <a href="https://jf-nextjs15-startup-registration-bhw7.vercel.app/">
                {language === 'en'
                  ? <h2>Startup Management Showcase App</h2>
                  : <h2>スタートアップ管理ショーケースアプリ</h2>
                }
              </a>
            </div>

            <div className="project" ref={othersRef}>
              <div className="image-wrapper bg-[#18181B]">
                <img src="/images/project3.png" alt="Others" />
              </div>
              <a href="https://main--jeric-react-next-typescript-portfolio.netlify.app/#projects">
                {language === 'en'
                  ? <h2>Other React, React Native and Swift UI Showcase Apps</h2>
                  : <h2>その他の React・React Native・SwiftUI ショーケースアプリ</h2>
                }
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
