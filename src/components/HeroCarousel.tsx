
import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselSlide {
  text: string;
  highlightText?: string;
  subText?: string;
  imageSrc?: string;
  type: 'text-only' | 'text-with-image';
}

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: CarouselSlide[] = [{
    text: "Digital Frontier",
    highlightText: "Marketing",
    type: "text-only"
  }, {
    text: "If you were truly Honest about it. We both know..",
    highlightText: "YOUR WEBSITE",
    subText: "could be........ MORE",
    type: "text-with-image",
    imageSrc: "/lovable-uploads/1937a134-56d1-4879-bf22-3c8aaf49e075.png"
  }, {
    text: "How about a",
    highlightText: "Money-Printing Machine",
    type: "text-only"
  }, {
    text: "",
    highlightText: "Money-Printing Machine",
    type: "text-with-image",
    imageSrc: "/lovable-uploads/914a27cb-e153-438e-8c3b-3937b1598283.png"
  }, {
    text: "",
    highlightText: "Money-Printing Machine",
    type: "text-with-image",
    imageSrc: "/lovable-uploads/3d7bf124-081a-4959-9a39-759c1e0dc150.png"
  }, {
    text: "",
    highlightText: "Money-Printing Machine",
    type: "text-with-image",
    imageSrc: "/lovable-uploads/2f2b5241-ae39-428b-a2cb-cc6b0a71a4e9.png"
  }, {
    text: "Stop paying for pretty pixels.",
    highlightText: "",
    subText: "Your site should print money. We design pages around the only metric that matters in 2025 - Attention.",
    type: "text-only"
  }];

  const autoPlayInterval = 5000; // 5 seconds

  const scrollToNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const nextIndex = emblaApi.selectedScrollSnap();
    setCurrentIndex(nextIndex);
  }, [emblaApi]);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      scrollToNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [scrollToNext]);

  // Update current slide index when carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return <div className="df-hero-carousel relative">
      <Carousel ref={emblaRef} className="w-full overflow-hidden" opts={{
      loop: true,
      align: "center",
      dragFree: false
    }}>
        <CarouselContent>
          {slides.map((slide, index) => <CarouselItem key={index} className="relative min-w-full">
              {slide.type === "text-with-image" && slide.imageSrc && <div className="absolute inset-0 z-0">
                  <img src={slide.imageSrc} alt="" className="w-full h-full object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                </div>}
              
              <div className="relative z-10 flex flex-col items-center justify-center h-[60vh] px-4 text-center">
                {slide.text && <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white text-center text-shadow-cyan">
                    {slide.text}
                  </h1>}
                
                {slide.highlightText && <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-[var(--df-light-blue)] mx-0 my-[32px] px-[9px] py-[9px] font-extrabold text-shadow-cyan">
                    {slide.highlightText}
                  </h1>}
                
                {slide.subText && <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--df-light-blue)] max-w-4xl text-shadow-cyan">
                    {slide.subText}
                  </h2>}
              </div>
            </CarouselItem>)}
        </CarouselContent>
      </Carousel>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => <button key={index} className={`h-1.5 rounded-full transition-all ${currentIndex === index ? "w-6 bg-[var(--df-light-blue)]" : "w-2 bg-white/30"}`} aria-label={`Go to slide ${index + 1}`} onClick={() => {
        emblaApi?.scrollTo(index);
        setCurrentIndex(index);
      }} />)}
      </div>
    </div>;
};

export default HeroCarousel;
