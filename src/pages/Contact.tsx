<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Digital Frontier - Connect with Innovation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --navy-900: #0f172a;
            --navy-800: #1e293b;
            --cyan-400: #22d3ee;
            --cyan-500: #06b6d4;
            --cyan-300: #67e8f9;
        }
        
        .gradient-border {
            background: linear-gradient(90deg, transparent, var(--cyan-400), transparent);
            height: 1px;
            width: 100%;
        }
        
        .cyber-button {
            background: linear-gradient(135deg, var(--cyan-500), var(--cyan-300));
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
            perspective: 1000px;
        }
        
        .cyber-button:hover {
            transform: translateY(-2px) rotateX(5deg);
            box-shadow: 0 10px 30px rgba(34, 211, 238, 0.4);
            animation: button-glow 1.5s infinite alternate;
        }
        
        .cyber-button:active {
            transform: translateY(0) rotateX(0);
        }

        @keyframes button-glow {
            from { box-shadow: 0 10px 30px rgba(34, 211, 238, 0.4); }
            to { box-shadow: 0 10px 40px rgba(34, 211, 238, 0.6); }
        }
        
        .cyber-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }
        
        .cyber-button:hover::before {
            left: 100%;
        }
        
        .grid-pattern {
            background-image: 
                linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
            background-size: 30px 30px;
            animation: gridMove 60s linear infinite;
        }
        
        @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 30px 30px; }
        }
        
        .grid-line {
            position: absolute;
            background: rgba(34, 211, 238, 0.05);
            z-index: -1;
        }
        
        .grid-line.horizontal {
            width: 100%;
            height: 1px;
            animation: linePulse 8s infinite ease-in-out;
        }
        
        .grid-line.vertical {
            width: 1px;
            height: 100%;
            animation: linePulse 8s infinite ease-in-out reverse;
        }
        
        @keyframes linePulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
        }

        .form-input {
            transition: all 0.3s ease;
            background: rgba(15, 23, 42, 0.5);
            border: 1px solid rgba(34, 211, 238, 0.3);
            box-shadow: 0 0 0 0 rgba(34, 211, 238, 0);
            position: relative;
            overflow: hidden;
        }
        
        .form-input::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--cyan-400), transparent);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
        }
        
        .form-input:focus::after {
            transform: scaleX(1);
        }
        
        .form-input:focus {
            border-color: var(--cyan-400);
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
            background: rgba(15, 23, 42, 0.8);
            animation: pulse-glow 2s infinite;
            transform: translateY(-2px);
        }
        
        .input-particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--cyan-400);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            z-index: 10;
        }

        @keyframes pulse-glow {
            0% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.3); }
            50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
            100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.3); }
        }

        .form-input:hover:not(:focus) {
            border-color: rgba(34, 211, 238, 0.5);
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.2);
        }
        
        .floating-particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--cyan-400);
            border-radius: 50%;
            animation: float 6s infinite linear;
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .typing-effect::after {
            content: '|';
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .success-message {
            transform: scale(0);
            transition: all 0.3s ease;
        }
        
        .success-message.show {
            transform: scale(1);
        }
    </style>
</head>
<body class="bg-slate-900 text-white min-h-screen overflow-x-hidden">
    <!-- Background Particles -->
    <div id="particles-container" class="fixed inset-0 pointer-events-none z-0"></div>
    
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-400/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-rocket text-slate-900"></i>
                    </div>
                    <span class="text-xl font-bold">Digital Frontier</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="text-cyan-400 hover:text-cyan-300 transition">Home</a>
                    <a href="#services" class="hover:text-cyan-400 transition">Services</a>
                    <a href="#about" class="hover:text-cyan-400 transition">About</a>
                    <a href="#contact" class="hover:text-cyan-400 transition">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="contact-hero" class="relative pt-24 pb-16 px-4 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900 to-slate-900"></div>
            <div id="hero-particles" class="absolute inset-0"></div>
        </div>
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center mb-12">
                <div class="inline-block relative">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6">
                        <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent typing-effect">
                            Transform Your Vision
                        </span>
                    </h1>
                    <div class="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-sm"></div>
                </div>
                <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mt-8">
                    <span class="text-cyan-400 font-medium">87% of clients</span> see results within 30 days. Let's discuss how we can <span class="text-cyan-400">10x your growth</span>.
                </p>
                <div class="mt-8 flex justify-center space-x-4">
                    <div class="flex items-center space-x-2 text-cyan-400">
                        <i class="fas fa-check-circle"></i>
                        <span>Trusted by 500+ companies</span>
                    </div>
                    <div class="flex items-center space-x-2 text-cyan-400">
                        <i class="fas fa-star"></i>
                        <span>4.9/5 (247 reviews)</span>
                    </div>
                </div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 items-start">
                <!-- Contact Form -->
                <div class="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 relative overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="absolute inset-0 grid-pattern opacity-20"></div>
                        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,145,178,0.1)_70%)]"></div>
                    </div>
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
                    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
                    <div class="relative z-10">
                        <h2 class="text-3xl font-bold mb-6 text-cyan-400 flex items-center">
                            <span class="mr-3">Get Started</span>
                            <span class="text-sm bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">Step 1 of 3</span>
                        </h2>
                        <div class="w-full bg-slate-700/50 rounded-full h-1.5 mb-6">
                            <div class="bg-gradient-to-r from-cyan-400 to-cyan-600 h-1.5 rounded-full" style="width: 33%"></div>
                        </div>
                        <form id="contactForm" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <div class="relative">
                                    <input type="text" name="firstName" required 
                                        class="w-full px-4 py-3 rounded-lg text-white placeholder-transparent form-input peer"
                                        placeholder="Enter your first name">
                                    <label class="absolute left-4 -top-2 px-1 bg-slate-800/50 text-sm text-cyan-300 transition-all 
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                        peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2 
                                        peer-focus:text-sm peer-focus:text-cyan-300 peer-focus:bg-slate-800/50">
                                        First Name
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Last Name</label>
                                <input type="text" name="lastName" required 
                                    class="w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 form-input"
                                    placeholder="Enter your last name">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Email Address</label>
                            <input type="email" name="email" required 
                                class="w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 form-input"
                                placeholder="your.email@company.com">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Company</label>
                            <input type="text" name="company" 
                                class="w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 form-input"
                                placeholder="Your company name">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Project Type</label>
                            <select name="projectType" required 
                                class="w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 form-input">
                                <option value="">Select project type</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-app">Mobile Application</option>
                                <option value="ai-solutions">AI Solutions</option>
                                <option value="blockchain">Blockchain Development</option>
                                <option value="consultation">Consultation</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium mb-2">Project Details</label>
                            <textarea name="message" rows="5" required 
                                class="w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 form-input resize-none"
                                placeholder="Tell us about your project, goals, and timeline..."></textarea>
                        </div>
                        
                        <button type="submit" 
                            class="w-full cyber-button text-slate-900 font-bold py-4 px-8 rounded-lg text-lg group">
                            <span class="relative z-10 flex items-center justify-center">
                                <span class="group-hover:translate-x-1 transition-transform">Get Your Free Consultation</span>
                                <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                            </span>
                        </button>
                        <p class="text-center text-sm text-slate-400 mt-4">
                            <i class="fas fa-lock mr-1"></i> Your information is 100% secure
                        </p>
                    </form>
                    
                    <div id="successMessage" class="success-message mt-6 p-4 bg-green-500/20 border border-green-400 rounded-lg text-center">
                        <i class="fas fa-check-circle text-green-400 text-2xl mb-2"></i>
                        <p class="text-green-300">Message sent successfully! We'll get back to you within 24 hours.</p>
                    </div>
                </div>
                
                <!-- Contact Info -->
                <div class="space-y-8">
                    <div class="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20">
                        <h3 class="text-2xl font-bold mb-4 text-cyan-400">Get in Touch</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-envelope text-cyan-400"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-slate-400">Email</p>
                                    <a href="mailto:hello@digitalfrontier.com" class="text-cyan-400 hover:text-cyan-300">
                                        hello@digitalfrontier.com
                                    </a>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-phone text-cyan-400"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-slate-400">Phone</p>
                                    <a href="tel:+1234567890" class="text-cyan-400 hover:text-cyan-300">
                                        +1 (234) 567-8900
                                    </a>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-map-marker-alt text-cyan-400"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-slate-400">Office</p>
                                    <p class="text-cyan-400">123 Tech Avenue, Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20">
                        <h3 class="text-2xl font-bold mb-4 text-cyan-400">Office Hours</h3>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span>Monday - Friday</span>
                                <span class="text-cyan-400">9:00 AM - 6:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Saturday</span>
                                <span class="text-cyan-400">10:00 AM - 4:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Sunday</span>
                                <span class="text-slate-400">Closed</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20">
                        <h3 class="text-2xl font-bold mb-4 text-cyan-400">Follow Our Journey</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition">
                                <i class="fab fa-twitter text-cyan-400"></i>
                            </a>
                            <a href="#" class="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition">
                                <i class="fab fa-linkedin text-cyan-400"></i>
                            </a>
                            <a href="#" class="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center hover:bg-cyan-400/30 transition">
                                <i class="fab fa-github text-cyan-400"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-slate-800/50 backdrop-blur-xl border-t border-cyan-400/20 mt-16">
        <div class="max-w-7xl mx-auto px-4 py-8 text-center">
            <p class="text-slate-400">
                © 2024 Digital Frontier. Shaping tomorrow's digital landscape today.
            </p>
        </div>
    </footer>

    <script>
        // Enhanced form interactions with particles
        document.querySelectorAll('.form-input').forEach(input => {
            // Create particles container
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'input-particles';
            particlesContainer.style.position = 'absolute';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.pointerEvents = 'none';
            input.parentNode.insertBefore(particlesContainer, input.nextSibling);
            
            input.addEventListener('focus', () => {
                // Create particles on focus
                for (let i = 0; i < 8; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'input-particle';
                    particlesContainer.appendChild(particle);
                    
                    gsap.fromTo(particle, 
                        {
                            x: Math.random() * input.offsetWidth,
                            y: input.offsetHeight,
                            opacity: 1,
                            scale: 1
                        },
                        {
                            y: -10,
                            opacity: 0,
                            scale: 0.5,
                            duration: 1.5,
                            ease: 'power2.out',
                            onComplete: () => particle.remove()
                        }
                    );
                }
            });
            
            input.addEventListener('mouseenter', () => {
                gsap.to(input, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });
        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('mouseenter', () => {
                gsap.to(input, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });
            
            input.addEventListener('mouseleave', () => {
                gsap.to(input, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Advanced Particle System
        function createParticles() {
            const container = document.getElementById('hero-particles');
            const particleCount = 100;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute rounded-full';
                particle.style.width = `${Math.random() * 4 + 2}px`;
                particle.style.height = particle.style.width;
                particle.style.background = `rgba(34, 211, 238, ${Math.random() * 0.5 + 0.1})`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Animate with GSAP
                gsap.to(particle, {
                    x: `${Math.random() * 200 - 100}px`,
                    y: `${Math.random() * 200 - 100}px`,
                    duration: Math.random() * 10 + 5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
                
                container.appendChild(particle);
            }
        }
        
        // Multi-step Form Handling
        const formSteps = document.querySelectorAll('.form-step');
        let currentStep = 0;
        
        function showStep(stepIndex) {
            formSteps.forEach((step, index) => {
                step.style.display = index === stepIndex ? 'block' : 'none';
            });
            
            // Update progress bar
            const progress = document.querySelector('.progress-bar');
            progress.style.width = `${((stepIndex + 1) / formSteps.length) * 100}%`;
            
            // Update step indicator
            const stepIndicator = document.querySelector('.step-indicator');
            stepIndicator.textContent = `Step ${stepIndex + 1} of ${formSteps.length}`;
        }
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                showStep(currentStep);
                
                // Animate next step
                gsap.from(formSteps[currentStep], {
                    opacity: 0,
                    y: 20,
                    duration: 0.5
                });
                
                return;
            }
            
            // Final submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Securing Your Consultation...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success animation
                gsap.to('#contactForm', {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    onComplete: () => {
                        document.getElementById('contactForm').style.display = 'none';
                        document.getElementById('successMessage').classList.add('show');
                        gsap.from('#successMessage', {
                            scale: 0.8,
                            opacity: 0,
                            duration: 0.5
                        });
                    }
                });
                
                // Reset form after delay
                setTimeout(() => {
                    this.reset();
                    currentStep = 0;
                    showStep(0);
                    document.getElementById('contactForm').style.display = 'block';
                    document.getElementById('contactForm').style.opacity = 1;
                    document.getElementById('contactForm').style.transform = 'none';
                    document.getElementById('successMessage').classList.remove('show');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 5000);
            }, 2000);
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // GSAP Animations
        gsap.from('#contact-hero h1', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('#contact-hero p', {
            duration: 1.5,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.3
        });
        
        gsap.from('.bg-slate-800/50', {
            duration: 1,
            scale: 0.9,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.5,
            stagger: 0.2
        });
        
        // Initialize
        createParticles();
    </script>
</body>
</html>