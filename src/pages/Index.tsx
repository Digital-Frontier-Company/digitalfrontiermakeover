import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useFaqToggle from "@/hooks/useFaqToggle";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudySlider from "@/components/CaseStudySlider";
import PricingToggle from "@/components/PricingToggle";
import FAQAccordion from "@/components/FAQAccordion";
import SEOSchema from "@/components/SEOSchema";
import Typed from 'typed.js';
import { ChevronDown, Zap, Target, Rocket, TrendingUp, Users, Award, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
const Index = () => {
  // Use the FAQ toggle hook
  useFaqToggle();

  // Reference for Typed.js element
  const typedElement = useRef(null);
  const typed = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [bubbles, setBubbles] = useState(() => Array.from({
    length: 8
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 40,
    speed: 0.1 + Math.random() * 0.2,
    direction: Math.random() * 360,
    opacity: 0.3 + Math.random() * 0.4
  })));
  const carouselSlides = ["The Secret Weapon you aren't using", "but Elite Companies are", "and will never share with you or your SMB", "Ready to get actual real results?", "Meet The Digital Frontier Company"];

  // Bubble movement animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prevBubbles => prevBubbles.map(bubble => ({
        ...bubble,
        x: (bubble.x + Math.cos(bubble.direction) * bubble.speed + 100) % 100,
        y: (bubble.y + Math.sin(bubble.direction) * bubble.speed + 100) % 100
      })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Handle bubble pop
  const handleBubblePop = (id: number) => {
    setBubbles(prevBubbles => prevBubbles.map(bubble => bubble.id === id ? {
      ...bubble,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      speed: 0.1 + Math.random() * 0.2,
      direction: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4
    } : bubble));
  };

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Carousel rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/48401342.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/48401342.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Parallax scroll effects
  const {
    scrollY
  } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  return <>
      <SEOSchema />
      
      
      {/* PRESIDENTIAL-LEVEL HERO SECTION with Parallax */}
      <motion.section className="relative isolate overflow-hidden min-h-screen bg-deep-navy" style={{
      background: 'var(--gradient-hero)',
      y: heroY
    }}>
        {/* Subtle Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({
          length: 3
        }, (_, i) => <div key={i} className="absolute rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10" style={{
          width: `${60 + i * 20}px`,
          height: `${60 + i * 20}px`,
          left: `${20 + i * 30}%`,
          top: `${20 + i * 25}%`,
          animation: `float ${4 + i * 2}s ease-in-out infinite`,
          animationDelay: `${i * 1.5}s`,
          filter: 'blur(1px)',
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * (0.01 + i * 0.005)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.01 + i * 0.005)}px)`,
          transition: 'transform 0.6s ease-out'
        }} />)}
        </div>

        {/* Interactive Clickable Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map(bubble => <div key={bubble.id} className="absolute rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 cursor-pointer hover:scale-110 transition-all duration-300" style={{
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          left: `${bubble.x}%`,
          top: `${bubble.y}%`,
          opacity: bubble.opacity,
          filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.4))',
          animation: `float ${3 + bubble.id % 3}s ease-in-out infinite`,
          animationDelay: `${bubble.id * 0.5}s`
        }} onClick={() => handleBubblePop(bubble.id)} />)}
        </div>

        {/* Animated Grid Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
          backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
          filter: 'drop-shadow(0 0 2px cyan)'
        }}></div>
        </div>
        
        {/* Subtle gradient overlay for depth */}
        <motion.div animate={{
        background: ['linear-gradient(135deg, rgba(47,128,255,0.05) 0%, transparent 50%, rgba(151,80,255,0.05) 100%)', 'linear-gradient(135deg, rgba(151,80,255,0.05) 0%, transparent 50%, rgba(47,128,255,0.05) 100%)', 'linear-gradient(135deg, rgba(47,128,255,0.05) 0%, transparent 50%, rgba(151,80,255,0.05) 100%)']
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute inset-0 bg-gradient-to-br from-electric-azure/5 via-transparent to-ultraviolet/5 mx-[10px] my-[10px] px-[3px] py-[3px]"></motion.div>
        
        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8 text-center flex flex-col justify-center min-h-screen">
          
          {/* Logo with Scale Animation */}
          <motion.div className="relative flex justify-center mb-12" style={{
          scale: logoScale
        }} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            {/* Geometric digital frame around logo */}
            <div className="absolute inset-0 -top-12 -bottom-12 -left-12 -right-12">
              {/* Outer rotating square */}
              <div className="absolute inset-0 border border-cyan-400/30 animate-rotate-slow" style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
            }}></div>
              
              {/* Inner diamond shape */}
              <div className="absolute inset-6 border-2 border-electric-azure/50 animate-pulse" style={{
              transform: 'rotate(45deg)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}></div>
              
              {/* Hexagon frame */}
              <div className="absolute inset-4 border border-blue-400/40 animate-rotate-slow" style={{
              animationDirection: 'reverse',
              animationDuration: '25s',
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}></div>
            </div>
            
            {/* Corner accent elements */}
            <div className="absolute -top-6 -left-6 w-4 h-4 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-4 h-4 border-r-2 border-t-2 border-cyan-400 animate-pulse" style={{
            animationDelay: '0.5s'
          }}></div>
            <div className="absolute -bottom-6 -left-6 w-4 h-4 border-l-2 border-b-2 border-cyan-400 animate-pulse" style={{
            animationDelay: '1s'
          }}></div>
            <div className="absolute -bottom-6 -right-6 w-4 h-4 border-r-2 border-b-2 border-cyan-400 animate-pulse" style={{
            animationDelay: '1.5s'
          }}></div>
            
            {/* Main logo - enlarged */}
            <img alt="Digital Frontier Logo" src="/lovable-uploads/b0838a55-4b01-431e-8756-b65d697c7271.png" className="h-80 w-auto relative z-10 object-cover" />
          </motion.div>

          {/* Presidential Headline with Fade-in */}
          <motion.h1 className="font-poppins font-semibold text-soft-white mb-8" style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          maxWidth: '70ch'
        }} initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.2
        }}>
            Stop Guessing, Start Growing with{' '}
            <span className="bg-gradient-to-r from-electric-azure via-blue-400 to-cyan-400 bg-clip-text text-transparent text-6xl font-extrabold animate-pulse-glow">AI-Powered Marketing</span>
          </motion.h1>

          {/* Subheadline with Staggered Animation */}
          <motion.p className="font-inter text-lg md:text-xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto mb-12" style={{
          lineHeight: '1.55'
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            We build content engines that drive organic traffic and generate qualified leads for B2B tech companies. No guesswork—just measurable results.
          </motion.p>

          {/* CTA with Hover Animation */}
          <motion.div className="mb-16" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }}>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-deep-navy bg-electric-azure rounded-lg transition-all duration-300 hover:shadow-lg" style={{
              boxShadow: '0 4px 20px -4px hsl(var(--electric-azure) / 0.3)',
              letterSpacing: '0.5px'
            }}>
                Book a Strategy Call →
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust indicators with Final Fade-in */}
          <motion.div className="text-soft-white/60 text-sm" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }}>
            <p>Trusted by 200+ B2B companies • Average 38% increase in SQLs</p>
          </motion.div>
        </div>
      </motion.section>

      {/* TRUST BAR - 6-logo auto-grid */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-muted-foreground text-sm mb-12 font-medium">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {["/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png", "/lovable-uploads/998924f0-2fc2-41d7-98d1-5b927c64c09e.png", "/lovable-uploads/914a27cb-e153-438e-8c3b-3937b1598283.png", "/lovable-uploads/dd9a50a2-11ff-45a3-bdef-97597bd967b7.png", "/lovable-uploads/006c1b20-0f5a-4e81-804c-dac4a28eb855.png", "/lovable-uploads/966b64a4-e3f7-488f-b15e-0d2d8e61d442.png"].map((logo, index) => <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img src={logo} alt={`Client logo ${index + 1}`} className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </div>)}
          </div>
        </div>
      </section>

      {/* BLUEPRINT SECTION - Enhanced with flashy animations */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background with gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-purple-900/20 to-electric-azure/10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-azure/5 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-azure/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-ultraviolet/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-poppins font-bold text-soft-white mb-4 bg-gradient-to-r from-electric-azure via-soft-white to-ultraviolet bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The Digital Frontier Blueprint
            </motion.h2>
            <motion.p 
              className="font-inter text-xl text-soft-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Three pillars that transform B2B marketing from guesswork to science
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: "Predict. Persuade. Profit.",
              description: "Your AI bloodhound sniffs out hot-money prospects before they even blink—then drags them straight into a funnel that rewrites itself on the fly.",
              icon: "/lovable-uploads/4ccc7a08-05c5-4500-9fba-149c0ec813cd.png",
              gradient: "from-cyan-400/20 to-blue-600/20",
              glowColor: "shadow-cyan-400/30"
            }, {
              title: "Data-Driven Insights", 
              description: "What gets measured gets mastered—and monetized.",
              icon: "/lovable-uploads/ac9d962e-7efe-4768-9ec0-774cd30f2d5d.png",
              gradient: "from-purple-400/20 to-pink-600/20",
              glowColor: "shadow-purple-400/30"
            }, {
              title: "Answer Engine Optimization",
              description: "Dominate voice search and AI-powered search results with our proprietary AEO methodology.", 
              icon: "🎯",
              gradient: "from-emerald-400/20 to-teal-600/20",
              glowColor: "shadow-emerald-400/30"
            }].map((card, index) => (
              <motion.div 
                key={index} 
                className={`group relative bg-card/80 backdrop-blur-sm border border-border/50 p-8 rounded-2xl transition-all duration-500 hover:border-electric-azure/50 hover:bg-card/90 hover:scale-105 hover:shadow-2xl ${card.glowColor}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-azure/50 via-transparent to-ultraviolet/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(47,128,255,0.3) 50%, transparent 70%)'
                }}></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 filter drop-shadow-lg flex justify-center items-center h-32"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {typeof card.icon === 'string' && card.icon.startsWith('/') ? (
                      <img src={card.icon} alt={card.title} className="h-28 w-28 object-contain" />
                    ) : (
                      <span className="text-7xl">{card.icon}</span>
                    )}
                  </motion.div>
                  
                  <motion.h3 
                    className="font-poppins font-semibold text-xl text-soft-white mb-4 group-hover:text-electric-azure transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {card.title}
                  </motion.h3>
                  
                   <motion.p 
                     className="font-inter text-soft-white/70 leading-relaxed group-hover:text-soft-white/90 transition-colors duration-300 mb-6"
                     whileHover={{ x: 5 }}
                   >
                     {card.description}
                   </motion.p>
                   
                   {/* Special content for first card */}
                   {index === 0 && (
                     <div className="space-y-4">
                       <ul className="space-y-3 text-soft-white/80">
                         <li className="flex items-start">
                           <span className="text-signal-lime mr-2">⚡</span>
                           <span className="text-sm">Live intent signals—no more finger-in-the-wind guessing</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-ultraviolet mr-2">🧠</span>
                           <span className="text-sm">Auto-personalized outreach that feels hand-typed (because it basically is)</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-electric-azure mr-2">📈</span>
                           <span className="text-sm">Real-time funnel tuning—watch those green arrows climb while you sip coffee</span>
                         </li>
                       </ul>
                       
                       <div className="mt-6">
                         <motion.button
                           className="bg-gradient-to-r from-signal-lime to-electric-azure text-deep-navy px-5 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                         >
                           See It Hunt →
                         </motion.button>
                         <p className="text-xs text-soft-white/60 mt-3">
                           Beta seats vanish fast—grab yours before your competitors wake up.
                         </p>
                       </div>
                     </div>
                    )}
                    
                    {/* Special content for second card */}
                    {index === 1 && (
                      <div className="space-y-4">
                        <ul className="space-y-3 text-soft-white/80">
                          <li className="flex items-start">
                            <span className="text-electric-azure mr-3 text-lg">📊</span>
                            <span className="text-sm">Predictive analytics that show you who's buying next (before they even click)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-ultraviolet mr-3 text-lg">🛰️</span>
                            <span className="text-sm">Performance forecasting so sharp, it's practically time travel</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-signal-lime mr-3 text-lg">⚙️</span>
                            <span className="text-sm">Actionable intelligence from your raw chaos of spreadsheets and dashboards</span>
                          </li>
                        </ul>
                        
                        <div className="mt-6">
                          <motion.button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            See The Future →
                          </motion.button>
                          <p className="text-xs text-soft-white/60 mt-3">
                            Your gut's good. This makes it lethal.
                          </p>
                        </div>
                      </div>
                    )}
                   
                   {/* Pulse effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-electric-azure/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating particles animation */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-electric-azure/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STICKY MOBILE FOOTER CTA */}
      <div className="sticky-cta fixed bottom-0 left-0 right-0 z-50 md:hidden bg-electric-azure text-deep-navy text-center py-4 font-semibold shadow-lg">
        <Link to="/contact" className="block">
          Ready to Transform? Talk to an Expert
        </Link>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-signal-lime w-1/3 transition-all duration-300"></div>
      </div>

      {/* CASE STUDY SLIDER - KPI-driven showcase */}
      <CaseStudySlider />

      {/* NEW SERVICE CARDS SECTION with Image Carousel */}
      <section className="py-20 relative overflow-hidden animate-on-scroll">
        {/* Image Carousel Background */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            {["/lovable-uploads/a2ac7ae8-1bc5-411f-9ef9-ff10d8fdd4a7.png", "/lovable-uploads/0d2360a9-25e2-44f5-be84-ff6da9ee399d.png", "/lovable-uploads/bc4175bf-e990-48ba-b6c6-bf010230dd00.png", "/lovable-uploads/4a58c6fe-4743-4bee-adf3-2753ea2a7a37.png", "/lovable-uploads/f0c22956-3fff-4d3e-9b62-c0f4058243d7.png"].map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide % 5 ? 'opacity-30' : 'opacity-0'}`} style={{
            backgroundImage: `url('${image}')`,
            filter: 'blur(1px)'
          }} />)}
          </div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-slate-900/80 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 animate-gradient-x"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="60" className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Generative Search Pro
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Turn every prompt into a spotlight. Generative + Answer Engine Optimization unlocked in a single tap. Try it free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI-Powered Marketing Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <img src="/lovable-uploads/e54d0fa9-0841-4307-be48-9729f84a20b3.png" alt="AI-Powered Marketing" className="w-full h-48 object-cover rounded-lg" onError={e => {
                console.error('Failed to load image:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }} onLoad={() => console.log('Image loaded successfully')} />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-xl text-cyan-300 text-center">
                AI-Powered Marketing
              </h3>
              <p className="mb-6 leading-relaxed text-slate-100 font-bold">
                Leverage cutting-edge artificial intelligence to automate and optimize your marketing campaigns for maximum impact.
              </p>
              <ul className="space-y-3 mb-8">
                {['Smart automation', 'Predictive analytics', 'Real-time optimization', 'ROI maximization'].map((feature, index) => <li key={index} className="flex items-center text-white rounded-tl-full rounded-full bg-[#074192]/0">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Explore AI Solutions
              </Link>
            </div>

            {/* Answer Engine Optimization Card - MIDDLE POSITION */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <a href="https://generativesearch.pro" target="_blank" rel="dofollow" className="block">
                  <img src="/lovable-uploads/686610ee-b3cc-4985-adab-c751e816394f.png" alt="Generative Engine Optimization" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" onError={e => {
                  console.error('Failed to load image:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                }} onLoad={() => console.log('Image loaded successfully')} />
                </a>
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-cyan-300 text-xl text-center">
                Answer Engine Optimization
              </h3>
              <p className="mb-6 leading-relaxed font-bold text-slate-100">
                Dominate AI-powered search results and voice assistants to capture high-intent traffic before your competition.
              </p>
              <ul className="space-y-3 mb-8">
                {['AI search optimization', 'Voice search ready', 'Featured snippets', 'Future-proof SEO'].map((feature, index) => <li key={index} className="flex items-center text-white">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <a href="https://generativesearch.pro" target="_blank" rel="dofollow" className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Visit GenerativeSearch.pro →
              </a>
            </div>

            {/* Data-Driven Insights Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <img alt="Data-Driven Insights" onError={e => {
                console.error('Failed to load image:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }} onLoad={() => console.log('Image loaded successfully')} className="w-full h-48 rounded-lg object-cover" src="/lovable-uploads/72dd30ec-d978-4ba9-baad-aba941aa15c4.png" />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-cyan-300 text-xl text-center">
                Data-Driven Insights
              </h3>
              <p className="mb-6 leading-relaxed text-base font-semibold text-slate-100">
                Transform raw data into actionable strategies that drive measurable business growth and competitive advantage.
              </p>
              <ul className="space-y-3 mb-8">
                {['Advanced analytics', 'Performance tracking', 'Custom reporting', 'Strategic insights'].map((feature, index) => <li key={index} className="flex items-center text-white rounded-full bg-[#074192]/0">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                See Our Analytics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE ENGINE SECTION */}
      <section className="df-revenue-engine animate-on-scroll">
        <div className="container">
          <div className="row" style={{
          alignItems: "center"
        }}>
            <div className="col-lg-6">
              <div className="df-neon-border mt-3 mb-5 mb-lg-3">
                <img alt="Digital Frontier Data Dashboard" className="img-fluid p-2 max-h-64 object-contain" style={{
                borderRadius: "10px"
              }} src="/lovable-uploads/8397f9b3-fc8b-4246-b8a6-166b26926970.png" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 style={{
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "20px"
            }}>Turn Your Brand into a Revenue Engine</h2>
              <div className="imagine-text">
                <p style={{
                fontSize: "16px",
                color: "#e0e0e0",
                marginBottom: "15px"
              }}>Imagine this: You wake up, check your dashboard, and sales are already climbing. Your ad spend? Low. Your return? Massive. And your brand? Getting noticed—on search, social, and beyond.</p>
              </div>
              <div className="content-text">
                <p style={{
                fontSize: "14px",
                color: "#cccccc",
                marginBottom: "15px"
              }}>This isn't a fantasy. It's what happens when businesses plug into Digital Frontier Marketing.</p>
                <p style={{
                fontSize: "14px",
                color: "#cccccc",
                marginBottom: 0
              }}>Most companies waste thousands on broken funnels, low-converting traffic, and "meh" strategies. We don't do mediocre. We engineer performance. <span className="highlight">Real clicks. Real conversions. Real cash.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GAIN SECTION */}
      <section className="df-what-youll-gain animate-on-scroll">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="" width="40" className="mb-4" />
            <h2 className="section-title" style={{
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "15px"
          }}>What You'll <span>Gain</span></h2>
            <p className="section-subtitle" style={{
            fontSize: "16px",
            color: "#e0e0e0",
            maxWidth: "700px",
            margin: "0 auto"
          }}>Our comprehensive website analysis delivers actionable insights to help you outperform your competition.</p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>🔍</div>
                <h3>SEO Analysis</h3>
                <p>Detailed review of your site's search engine optimization with clear recommendations for improvement.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>📈</div>
                <h3>Conversion Insights</h3>
                <p>Expert evaluation of your conversion funnels with optimization tips to increase your sales.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>🔄</div>
                <h3>Competitor Analysis</h3>
                <p>See how you stack up against competitors and identify opportunities to gain market share.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="df-gain-card">
                <div className="icon" style={{
                fontSize: "32px"
              }}>📋</div>
                <h3>Action Plan</h3>
                <p>Receive a prioritized list of improvements with clear next steps to implement changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TOGGLE - Project/Retainer choice */}
      <PricingToggle />

      {/* FAQ ACCORDION - Radix UI powered */}
      <FAQAccordion />

      {/* FINAL CTA */}
      <section className="df-final-cta animate-on-scroll">
        <div className="container">
          <div className="text-center mb-4">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company" width="80" className="mb-4" />
          </div>
          <h2>Ready to Own Your Digital Space?</h2>
          <p>If you're ready to dominate your market and make your competitors irrelevant, let's talk. Click below, and let's build something legendary.</p>
          <div className="text-center">
            <Link to="/contact" className="df-yellow-cta-button">Join Now</Link>
          </div>
          <p className="tagline mt-4">Digital Frontier—Marketing That Actually Works.</p>
        </div>
      </section>

      {/* LEARN MORE SECTION */}
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-8">Explore Digital Frontier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Digital Marketing Solutions */}
            <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Digital Marketing Solutions</h3>
              <div className="space-y-3">
                <Link to="/ad-funnel-blueprint" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Ad Funnel Blueprint</h4>
                  <p className="text-slate-300 text-sm">Optimize your advertising funnel from awareness to conversion with our proven blueprint.</p>
                </Link>
                
                <Link to="/generative-engine-optimization" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Generative Engine Optimization</h4>
                  <p className="text-slate-300 text-sm">Leverage AI-generated content to boost your visibility and engagement.</p>
                </Link>
                
                <Link to="/answer-engine-optimization" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Answer Engine Optimization</h4>
                  <p className="text-slate-300 text-sm">Optimize your content to appear in AI-driven answer boxes and voice search results.</p>
                </Link>
              </div>
            </div>
            
            {/* AI Marketing Foundations */}
            <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">AI Marketing Foundations</h3>
              <div className="space-y-3">
                <Link to="/technical" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Technical Breakdown</h4>
                  <p className="text-slate-300 text-sm">Understand how modern AI marketing tools work and how they can transform your business.</p>
                </Link>
                
                <Link to="/evolution" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Evolution of AI Marketing</h4>
                  <p className="text-slate-300 text-sm">Trace the history of AI in marketing from early automation to today's sophisticated systems.</p>
                </Link>
                
                <Link to="/regulations" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Regulations & Compliance</h4>
                  <p className="text-slate-300 text-sm">Navigate the complex legal landscape of AI-powered marketing and advertising.</p>
                </Link>
              </div>
            </div>
            
            {/* Industry Insights */}
            <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Industry Insights</h3>
              <div className="space-y-3">
                <Link to="/sectors" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Sector Spotlights</h4>
                  <p className="text-slate-300 text-sm">See how different industries are leveraging AI marketing for competitive advantage.</p>
                </Link>
                
                <Link to="/future" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">Future Trends</h4>
                  <p className="text-slate-300 text-sm">Get ahead of the curve with insights into emerging AI marketing technologies.</p>
                </Link>
                
                <Link to="/ai-bias-in-advertising" className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all block">
                  <h4 className="text-lg font-semibold text-blue-300 mb-1">AI Bias in Advertising</h4>
                  <p className="text-slate-300 text-sm">Understand the ethical implications of AI in advertising and how to address bias.</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Additional Resources Row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/about-us" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all">
              <h4 className="text-xl font-bold text-blue-300 mb-2">About Digital Frontier</h4>
              <p className="text-slate-300">Learn more about our team, our mission, and how we're changing the digital marketing landscape.</p>
            </Link>
            
            <Link to="/contact" className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30 hover:border-blue-500/50 hover:bg-blue-900/30 transition-all">
              <h4 className="text-xl font-bold text-blue-300 mb-2">Ready to Transform Your Marketing?</h4>
              <p className="text-slate-300">Contact us today to discuss how we can help your business thrive in the digital frontier.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* HUBSPOT FORM SECTION - Fixed overlapping containers */}
      <section className="relative py-16 bg-deep-navy border-t border-border">
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-medium text-soft-white mb-4" style={{
            fontSize: 'clamp(28px, 4vw, 40px)'
          }}>
              Ready to Transform Your Marketing?
            </h2>
            <p className="font-inter text-lg text-soft-white/70 max-w-2xl mx-auto">
              Get your free AI marketing audit and strategy session. Let's discuss your growth goals.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
            <div className="hs-form-frame" data-region="na1" data-form-id="5ab0be60-7598-4f9c-ac2f-72519d49d946" data-portal-id="48401342"></div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-electric-azure/5 via-transparent to-transparent pointer-events-none"></div>
      </section>
    </>;
};
export default Index;