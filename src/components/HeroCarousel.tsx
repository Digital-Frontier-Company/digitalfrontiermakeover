
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
    draggable: false,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: CarouselSlide[] = [
    {
      text: "Digital Frontier Marketing",
      type: "text-only",
    },
    {
      text: "You know your website could be...",
      highlightText: "more",
      type: "text-with-image",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "How about a",
      highlightText: "Money-Printing Machine",
      type: "text-only",
    },
    {
      text: "",
      highlightText: "Money-Printing Machine",
      type: "text-with-image",
      imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      subText: "Luxury yachts on the ocean"
    },
    {
      text: "",
      highlightText: "Money-Printing Machine",
      type: "text-with-image",
      imageSrc: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      subText: "Private jets and luxury cars"
    },
    {
      text: "",
      highlightText: "Money-Printing Machine",
      type: "text-with-image",
      imageSrc: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      subText: "Luxurious Vegas parties"
    },
    {
      text: "",
      highlightText: "Money-Printing Machine",
      type: "text-with-image",
      imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      subText: "Relaxing island life"
    },
    {
      text: "Stop paying for pretty pixels.",
      highlightText: "",
      subText: "Your site should print money. We design pages around the only metric that matters in 2025 - Attention.",
      type: "text-only",
    },
  ];

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

  return (
    <div className="df-hero-carousel relative">
      <Carousel
        ref={emblaRef}
        className="w-full overflow-hidden"
        opts={{
          loop: true,
          align: "center",
          dragFree: false,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-w-full">
              {slide.type === "text-with-image" && slide.imageSrc && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={slide.imageSrc} 
                    alt={slide.subText || "Background"} 
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                </div>
              )}
              
              <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] px-4 text-center">
                {slide.text && (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    {slide.text}
                  </h1>
                )}
                
                {slide.highlightText && (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--df-light-blue)] text-shadow-lg">
                    {slide.highlightText}
                  </h1>
                )}
                
                {slide.subText && (
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-3xl">
                    {slide.subText}
                  </h2>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-[var(--df-light-blue)]" : "w-2 bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              emblaApi?.scrollTo(index);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
