import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants/index";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [isMobille, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTestimononials = isMobille
    ? testimonials.slice(0, 3)
    : testimonials;

  return (
    <section
      id="testimonials"
      className="flex-center section-padding scroll-mt-24"
      aria-label="Client Testimonials"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub={`⭐ ${
            isMobille ? "Top Feedbacks" : "Client Feedback Highlights"
          }`}
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {visibleTestimononials.map(({ imgPath, name, mentions, review }) => (
            <GlowCard card={{ review }} key={name}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
