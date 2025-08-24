
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Youtube, Coffee, Code, Shield, BarChart3, Bot, Sparkles, Zap, Rocket, Cloud, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Typewriter from "@/components/Typewriter";
import { SectionHeader, Card, Divider } from "@/components/Section";
import LoadingScreen from "@/components/LoadingScreen";
import SEO from "@/components/SEO";

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and preload images
    const preloadImages = async () => {
      const imageUrls = [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=200",
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80",
        "https://www.ccn.com/wp-content/uploads/2025/07/bitcoin-price-breakout-or-breakdown-1536x864.webp",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
        "/static/robotics.png",
        "/static/photography.png"
      ];

      try {
        await Promise.all(
          imageUrls.map(url => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = resolve; // Don't fail if image doesn't load
              img.src = url;
            });
          })
        );
      } catch (error) {
        console.log('Some images failed to preload');
      }

      // Minimum loading time of 2 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    preloadImages();
  }, []);

  return (
    <>
      <SEO />
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Nav />
        <main className="mx-auto max-w-4xl px-4 sm:px-6">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Fun />
          <Divider />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }){
  return (
    <motion.a 
      href={href} 
      target={href.startsWith("http") ? "_blank" : undefined} 
      rel="noreferrer" 
      aria-label={label} 
      className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function Hero(){
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28" aria-label="Hero">
      {/* Animated Clouds */}
      <motion.div 
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 left-10 text-gray-300 dark:text-gray-600 opacity-60"
      >
        <Cloud className="w-12 h-12" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-16 right-20 text-gray-300 dark:text-gray-600 opacity-50"
      >
        <Cloud className="w-10 h-10" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, 120, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 10 }}
        className="absolute top-24 left-1/4 text-gray-300 dark:text-gray-600 opacity-40"
      >
        <Cloud className="w-8 h-8" />
      </motion.div>
      
      {/* Animated Grass */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 left-16 text-green-400 dark:text-green-600"
      >
        <Sprout className="w-6 h-6" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-0 right-24 text-green-500 dark:text-green-500"
      >
        <Sprout className="w-5 h-5" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 left-1/3 text-green-600 dark:text-green-400"
      >
        <Sprout className="w-4 h-4" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1 right-1/3 text-green-400 dark:text-green-600"
      >
        <Sprout className="w-3 h-3" />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        {/* Text Section */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-2xl text-gray-500 dark:text-gray-400 mb-2"
          >
            Hi! I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.6 }} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Shariq Hassan
          </motion.h1>
          <Typewriter 
            className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 mb-10 font-medium" 
            phrases={["Software Engineer", "Data Scientist", "ML/AI Explorer", "F1 Fanatic 🏎️💨", "I like building useful things"]} 
          />
        </div>
        
        {/* Character Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto w-64 sm:w-80 md:w-96"
        >
          {/* Main Character */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative flex justify-center"
          >
            {/* Human Character */}
            <div className="relative">
              {/* Head */}
              <div className="w-20 h-20 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center mb-2">
                              <div className="w-16 h-16 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white dark:text-gray-800" />
              </div>
              </div>
              
              {/* Body */}
              <div className="w-16 h-20 bg-blue-500 dark:bg-blue-600 rounded-full mx-auto"></div>
              
              {/* Arms */}
              <div className="absolute top-8 -left-2 w-4 h-12 bg-blue-500 dark:bg-blue-600 rounded-full transform -rotate-12"></div>
              <div className="absolute top-8 -right-2 w-4 h-12 bg-blue-500 dark:bg-blue-600 rounded-full transform rotate-12"></div>
              
              {/* Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-3 h-8 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
                <div className="w-3 h-8 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
              </div>
              
              {/* Sparkles around character */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 text-yellow-400"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-2 -left-2 text-blue-400"
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-4 -left-4 text-purple-400"
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Companion Dog */}
          <motion.div 
            animate={{ 
              y: [0, -5, 0],
              x: [0, 3, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-0 left-1/4"
          >
            <div className="relative">
              {/* Dog body */}
              <div className="w-12 h-8 bg-amber-600 dark:bg-amber-700 rounded-full"></div>
              {/* Dog head */}
              <div className="w-8 h-8 bg-amber-500 dark:bg-amber-600 rounded-full absolute -top-2 -left-1"></div>
              {/* Dog ears */}
              <div className="w-3 h-4 bg-amber-400 dark:bg-amber-500 rounded-full absolute -top-3 -left-2 transform -rotate-12"></div>
              <div className="w-3 h-4 bg-amber-400 dark:bg-amber-500 rounded-full absolute -top-3 left-1 transform rotate-12"></div>
              {/* Dog tail */}
              <motion.div 
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-6 h-2 bg-amber-600 dark:bg-amber-700 rounded-full absolute -right-2 top-2 transform rotate-45"
              ></motion.div>
            </div>
          </motion.div>
          
          {/* Companion Robot */}
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-4 right-1/4"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white dark:text-gray-800" />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 text-blue-400"
              >
                <Zap className="w-3 h-3" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About(){
  return (
    <section id="about" aria-label="About" className="py-20">
      <SectionHeader id="about" title="About Me" />
      <div className="mt-12 sm:mt-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 sm:gap-6"
        >
          <motion.a 
            href="https://github.com/shariqimran" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
                          <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-100" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/shariqimran/" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
                          <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-100" />
          </motion.a>
                      <motion.a 
              href="mailto:shariqihassan@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-100" />
            </motion.a>
        </motion.div>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hello World!</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm Shariq, and thanks for stopping by! I'm currently in my 3rd year at the University of British Columbia (UBC), majoring in Combined Major in Science with a focus on Computer & Data Science. When I'm not buried in coursework, you'll probably find me working on data science projects, contributing to the Undergraduate Statistics Society, or exploring new technologies.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            This site is my little corner of the internet where I share projects, thoughts, and whatever else comes to mind. Feel free to explore around!
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            If anything catches your eye or you just want to connect, my socials are above and in the footer. Always up for a chat! :')
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Experience(){
  const items = [
    { 
      company: "RBC", 
      role: "QA Automation Analyst Intern", 
      when: "Sep 2025 - Dec 2025", 
      location: "Vancouver, BC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/1280px-RBC_Royal_Bank.svg.png",
      bullets: [
        "Excited to be joining RBC as a QA Automation Analyst Intern in Fall 2025—looking forward to learning and making an impact!",
      ],
      technologies: ["Python", "Selenium", "Playwright"]
    },
  ];
  
  return (
    <section id="experience" aria-label="Experience" className="py-20">
      <SectionHeader id="experience" title="Experience" />
      <div className="mx-auto mt-16 max-w-4xl space-y-6">
        {items.map((it, idx) => (
          <motion.details 
            key={idx} 
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={it.logo} 
                    alt={`${it.company} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{it.role} @ {it.company}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 text-red-500">📍</div>
                    <div className="text-lg text-gray-600 dark:text-gray-400">{it.location}</div>
                    <div className="text-lg text-gray-500 dark:text-gray-500">•</div>
                    <div className="text-lg text-gray-600 dark:text-gray-400">{it.when}</div>
                  </div>
                </div>
              </div>
              <motion.span 
                className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform duration-300 text-2xl"
                whileHover={{ scale: 1.2 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="white"/>
                  <path d="M10 14L16 20L22 14" stroke="#19191C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </summary>
            
            <div className="px-8 pb-8 ml-20 space-y-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                {it.bullets.map((b, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-gray-400 dark:text-gray-500 mt-2">•</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {it.technologies.map((tech, i) => (
                  <motion.span 
                    key={i}
                    className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

function Projects(){
  // Separate projects into two categories

  const dataScience = [
    {
      title: "Customer Personality Analysis",
      subtitle: "Statistical modeling & marketing insights",
      desc: "Conducted comprehensive customer segmentation analysis using logistic regression to identify factors influencing marketing campaign responses. Analyzed 2,240 customers' demographic and behavioral data, achieving 78.6% accuracy with 76.1% sensitivity. Key findings showed recency of purchase, prior campaign acceptance, and family structure significantly impact response rates.",
      tech: "R • Statistical Modeling • Logistic Regression • Data Visualization • Marketing Analytics",
      link: "#",
      github: "https://github.com/Oscar-Yik/stat_301_project",
      color: "from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
      image: "https://nycdsa-blog-files.s3.us-east-2.amazonaws.com/2021/10/tyler/7832-977818-NfHoVsXm-1200x600.jpg" // Customer analysis
    },
    {
      title: "Climate Analysis Vancouver",
      subtitle: "Time-series forecasting models",
      desc: "Implemented advanced time-series forecasting models using Prophet, ARIMA, and seasonal decomposition to analyze Vancouver's climate data (1941-2024), identifying seasonal and long-term trends in temperature and precipitation. Preprocessed datasets using Pandas and NumPy, creating features such as rolling averages and time lags to improve forecasting. Evaluated model accuracy using RMSE and MAPE; visualized climate trends with Matplotlib and Seaborn to present findings.",
      tech: "Python • Pandas • NumPy • Prophet • ARIMA • Matplotlib • Seaborn • Time Series Analysis",
      link: "#",
      github: "https://github.com/shariqimran/Van_Climate_Analysis",
      color: "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
      image: "https://sites.northwestern.edu/elannesscohn/files/2019/11/1903-climate-resources-f.jpg" // Climate/weather data
    },
    {
      title: "COVID-19 Vancouver Crime Analysis",
      subtitle: "Statistical inference and hypothesis testing",
      desc: "Conducted statistical inference, bootstrapping, and hypothesis testing on crime rate fluctuations before and after COVID-19. Calculated confidence intervals and p-values to assess the significance of 'Offence Against a Person' crime rate fluctuations. Applied t-tests to account for replacement error, revealing significant increase in crime during COVID-19.",
      tech: "R • Statistical Inference • Bootstrapping • Hypothesis Testing • T-tests • Data Analysis",
      link: "#",
      github: "https://github.com/shariqimran/stat-201-crimeRateInference",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://static01.nyt.com/images/2025/08/13/opinion/13crime-editorial-image/13crime-editorial-image-articleLarge.jpg?quality=75&auto=webp&disable=upscale" // Crime analysis
    },
    {
      title: "Tennis Career Earnings Regression Model",
      subtitle: "KNN regression analysis",
      desc: "Conducted comprehensive data analysis on the Top 500 tennis players to predict career earnings using predictor variables. Utilized KNN-regression model, optimized it for the best predictor variable and performed in-depth analysis. Implemented data cleaning and preprocessing techniques to prepare the data for analysis, developed advanced data visualization skills using the ggplot2 library and performed statistical analysis to uncover insights and patterns in the data.",
      tech: "R • KNN Regression • Data Analysis • ggplot2 • Statistical Modeling • Data Visualization",
      link: "#",
      github: "https://github.com/shariqimran/dsci-100-tennisRegressionModel",
      color: "from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20",
      image: "https://media.licdn.com/dms/image/v2/D562DAQEYo1mktjNgBA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1683435291334?e=1756605600&v=beta&t=ZOeju61ZlZzU6l82xnSUoY6iovh1d3BtLi9Asg3-VGE" // Tennis
    },
  ];
  
  const softwareEngineering = [
    {
      title: "Quantitative Trading Analysis Platform",
      subtitle: "Web-based financial analysis & backtesting",
      desc: "Comprehensive quantitative trading analysis platform built with Streamlit providing real-time financial data analysis, technical indicators, backtesting capabilities, and sentiment analysis. Features include moving average crossover strategies, RSI mean reversion, volatility analysis, and multi-source sentiment analysis from Reddit and Google News using VADER sentiment analysis.",
      tech: "Python • Streamlit • Pandas • NumPy • Plotly • Yahoo Finance API • VADER Sentiment",
      link: "https://quantalgo.streamlit.app",
      github: "https://github.com/shariqimran/Quant",
      color: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
      image: "https://as1.ftcdn.net/v2/jpg/03/10/46/56/1000_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg" // Trading charts
    },
    {
      title: "TripExpense",
      subtitle: "Full-stack expense splitting application",
      desc: "Full-stack web application that revolutionizes how friends split and track expenses during trips. Features smart expense tracking with automatic equal splitting, real-time balance calculation, group management with shareable links, comprehensive dashboard, CSV export, and AI-powered settlement suggestions. Built with modern technologies for seamless, secure, and intuitive group finance management.",
      tech: "Next.js 14 • TypeScript • Tailwind CSS • Supabase • PostgreSQL • Vercel • Framer Motion",
      link: "#",
      github: "https://github.com/nimamot/TripExpense",
      color: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-indigo-900/20",
      // image: "https://cdn.prod.website-files.com/61d697f0187c4a95cd315ed3/638538d28043b36e334cd7f9_A%20complete%20guide%20to%20borrowing%20money.png" // Expense tracking
      image: "https://a.storyblok.com/f/188325/1460x820/af7cf054d5/managing-business-travel-expenses.png" // Expense tracking
    },
    {
      title: "peerAdvice (nwHacks Hackathon)",
      subtitle: "Peer-to-peer advising platform",
      desc: "Designed and developed a peer-to-peer advising platform utilizing Python, Flask, and PostgreSQL with user authentication implemented through Google OAuth and Firebase and appointment scheduling via Calendly API. Incorporated front-end technologies such as HTML, CSS, and JavaScript to create a smooth interface and user experience. Applied Agile methodologies for efficient project management and collaboration resulting in a functional user-friendly solution.",
      tech: "Python • Flask • PostgreSQL • Google OAuth • Firebase • Calendly API • HTML • CSS • JavaScript",
      link: "#",
      github: "https://github.com/shariqimran/peerAdvice",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHr154lj8ef0A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685697157069?e=1761782400&v=beta&t=b_jZ0g8RXfsPGag2LD66R4lxYgHwTCzaVXn6vqIS9wI" // Teamwork/peer advice
    },
    {
      title: "SportsStats",
      subtitle: "Sports statistics and analysis platform",
      desc: "Developed a comprehensive sports statistics and analysis platform offering detailed data across multiple sports. Built with PHP backend and Oracle database for robust data management, featuring user-friendly web interface with CSS styling and HTML structure. Provides comprehensive statistics for sports enthusiasts, analysts, and researchers with regular data updates.",
      tech: "PHP • CSS • HTML • Oracle • Database Management • Web Development",
      link: "#",
      github: "https://github.com/nimamot/SportsStats",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/thesoccersidelines.com/wp-content/uploads/2020/02/Soccer-Statistics-General.jpg" // Sports analytics
    },
  ];


  
  // Helper to render a project card (collapsible)
  function CollapsibleProjectCard({ project }: { project: any }) {
    const [open, setOpen] = React.useState(false);
        return (
          <div className={`w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm mb-8 transition-all ${open ? 'ring-2 ring-blue-300' : ''}`}> 
        <button
          className="w-full flex items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8 text-left focus:outline-none"
          style={{ minHeight: '100px' }}
          onClick={() => setOpen((v) => !v)}
        >
          {project.image && (
            <img src={project.image} alt={project.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mr-3 sm:mr-4" />
          )}
          <div className="flex-1">
            <div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</span>
              {project.emoji && <span className="ml-1 text-xl">{project.emoji}</span>}
            </div>
            {project.subtitle && (
              <div className="text-sm sm:text-lg font-medium text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</div>
            )}
          </div>
          <span className="ml-4 flex items-center justify-center">
            <svg
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                points="10,15 18,23 26,15"
                stroke="#1A1A22"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {open && (
          <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
            {project.desc && (
              <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">{project.desc}</div>
            )}
            {project.tech && (
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <span>{project.tech}</span>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                  </motion.a>
                )}
              </div>
            )}
            {project.date && (
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2 mt-2 flex items-center gap-2">
                <span className="text-xl">📍</span> {project.date}
              </div>
            )}
            {project.full && (
              <div className="text-gray-700 dark:text-gray-200 text-base mb-4">{project.full}</div>
            )}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-200 rounded-lg text-xs font-medium">{tag}</span>
                ))}
              </div>
            )}
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm">View Project <ExternalLink className="h-4 w-4"/></a>
            )}
          </div>
        )}
      </div>
    );
  }

  // Projects currently in progress
  const projectsInProgress = [
    {
      title: "Bitcoin Price Prediction",
      subtitle: "Crypto price forecasting with ML",
      desc: "Building machine learning models to predict Bitcoin prices using time-series analysis and LSTM networks.",
      tech: "Python • Machine Learning • XGBoost • CatBoost • LSTM • Time Series • Feature Engineering",
      link: "#",
      github: "https://github.com/nimamot/Price_prediction",
      emoji: "₿",
      color: "from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&crop=center" // Bitcoin/crypto
    },
    {
      title: "Animal Adoption Platform",
      subtitle: "NGO website for animal welfare",
      desc: "Developing a collaborative website for animal adoption and fundraising campaigns with modern web technologies.",
      tech: "Node.js • Express • HTML • CSS • JavaScript • Web Development • Collaboration",
      link: "#",
      github: "https://github.com/AryaanHabib/nwHack",
      emoji: "🐾",
      color: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop&crop=center" // Animal adoption
    }
  ];

  // Merge and group projects for single-column display
  const allProjects = [
    { section: 'Data Science', projects: dataScience },
    { section: 'Software Engineering', projects: softwareEngineering }
  ];

  return (
    <section id="projects" aria-label="Projects" className="py-16">
      <SectionHeader id="projects" title="Projects" />
      <div className="mt-12 max-w-4xl mx-auto">
        {allProjects.map((group, idx) => (
          <div key={group.section} className="mb-12">
            <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-left">{group.section}</h3>
            {group.projects.map((p, i) => (
              <CollapsibleProjectCard key={i} project={p} />
            ))}
          </div>
        ))}
        
        {/* Projects in Progress Section */}
        <div className="mb-12">
          <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-left">🚧 Projects in Progress</h3>
          <div className="space-y-3">
            {projectsInProgress.map((p, i) => (
              <motion.details 
                key={i} 
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="text-xl"
                    >
                      {p.emoji}
                    </motion.div>
                    <span className="text-gray-900 dark:text-white">{p.title}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{p.subtitle}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300">{p.desc}</span>
                  </div>
                  <motion.svg
                    className="w-5 h-5 text-gray-900 dark:text-gray-100 transition-transform duration-300"
                    whileHover={{ scale: 1.2 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </summary>
                <div className="pt-4 pl-12 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
                  <span>{p.tech}</span>
                  {p.github && (
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                    </motion.a>
                  )}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tech, link, emoji, color, index }: { 
  title: string; 
  desc: string; 
  tech: string; 
  link: string; 
  emoji: string;
  color: string;
  index: number;
}){
  return (
    <motion.div 
      className={`rounded-3xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all bg-gradient-to-br ${color}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-4xl"
        >
          {emoji}
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg"
        >
          🏆
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{desc}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tech}</p>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          View Project <ExternalLink className="h-4 w-4"/>
        </a>
      </motion.div>
    </motion.div>
  );
}

function Fun(){
  const [selectedActivity, setSelectedActivity] = useState("cycling");

  const sideQuests = [
    { id: "cycling", emoji: "🚴", label: "Cycling", desc: "Vancouver seawall & trails" },
    { id: "muaythai", emoji: "🥋", label: "Muay Thai", desc: "Kickboxing & clinch work" },
    { id: "golf", emoji: "⛳", label: "Golf", desc: "Swing & putt" },
    { id: "djing", emoji: "🎧", label: "DJing", desc: "Mixing & live sets" },
    { id: "volunteering", emoji: "🤝", label: "Volunteering", desc: "VIFF & VSO Vancouver" },
    { id: "markets", emoji: "📈", label: "Financial Markets", desc: "Trading & analysis" },
    { id: "cooking", emoji: "👨‍🍳", label: "Cooking", desc: "Culinary adventures" },
    { id: "traveling", emoji: "✈️", label: "Traveling", desc: "Exploring new places" },
  ];

  const activityContent: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    achievements?: string[];
    link: string;
    linkText: string;
  }> = {
    cycling: {
      title: "Cycling Around Vancouver 🚴",
      subtitle: "Vancouver seawall & trails",
      description: "I like cycling around Stanley Park, along Kits Beach, and just cruising through the city! I’ve been chasing my 20k record lately, which usually turns into a battle with my cardio more than anything else. Strava keeps me honest… and also reminds me how much faster everyone else is.",
          image: "/images/cycling_1.jpg",
      link: "#",
      linkText: "Cycling Routes"
    },
    muaythai: {
      title: "Muay Thai 🥋",
      subtitle: "The art of eight limbs",
      description: "Muay Thai has been one of the most challenging but rewarding things I’ve tried. Training is a mix of kicks, clinches, and realizing just how much cardio I don’t have — but nothing beats the feeling of slowly getting better each time.",
      image: "/images/boxing_1.JPG",
      link: "#",
      linkText: "Training Journey"
    },
    golf: {
      title: "Golf ⛳",
      subtitle: "Swing & putt",
      description: "I love heading to the range and working on my driver (still chasing that perfect shot). On weekends, you’ll probably find me at one of Vancouver’s pitch-and-putts, trying to shave a stroke off my short game and enjoying the laid-back vibe.",
      image: "/images/golf_2.PNG",
      link: "#",
      linkText: "Golf Journey"
    },
    djing: {
      title: "DJing 🎧",
      subtitle: "Mixing & live sets",
      description: "I’m brand new to DJing after buying my first deck, so most of my time is spent experimenting and figuring out what blends together. Half the fun is messing it up, the other half is catching those rare moments where it actually sounds good.",
      image: "/images/dj_1.JPG",
      link: "#",
      linkText: "DJ Journey"
    },
    volunteering: {
      title: "Volunteering in Vancouver 🤝",
      subtitle: "VIFF & VSO Vancouver",
      description: "I’ve volunteered at both the Vancouver International Film Festival (VIFF) and the Vancouver Symphony Orchestra (VSO) — two things I already loved as a fan. VIFF opened me up to a whole new range of local films and genres, and at VSO I get to hear orchestras play pieces that blow me away every time. I don’t go as often now, but whenever I do, it’s always a fun and rewarding experience.",
      image: "/images/volunteer_1.jpeg",
      link: "#",
      linkText: "Volunteer Stories"
    },
    markets: {
      title: "Financial Markets 📈",
      subtitle: "Trading & analysis",
      description: "I recently got into the world of financial markets, mostly experimenting and trying to make sense of charts that move faster than I can react. One big takeaway so far: investing early really does matter, even if my current strategy is mostly vibes.",
      image: "/images/finance_1.jpg",
      link: "#",
      linkText: "Market Analysis"
    },
    traveling: {
      title: "Traveling ✈️",
      subtitle: "Exploring new places",
      description: "Traveling for me is all about diving into new cities, wandering through local streets and markets, and eating my way through different cultures. I’m a foodie at heart, so every trip is built around discovering what the locals eat.",
      image: "/images/travel_2.PNG",
      link: "#",
      linkText: "Travel Stories"
    },
    cooking: {
      title: "Cooking Adventures 👨‍🍳",
      subtitle: "Culinary experiments",
      description: "I like to cook here and there, mostly when a recipe on Instagram catches my eye. My cooking is pretty experimental — sometimes it’s great, other times it’s… less than great — but it’s always fun trying.",
      image: "/images/cooking_1.JPG",
      link: "#",
      linkText: "Recipe Collection"
    },
  };

  const currentContent = activityContent[selectedActivity as keyof typeof activityContent];

  return (
    <section id="fun" aria-label="Fun" className="py-20">
      <SectionHeader id="fun" title="Fun" />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        There's more to life than just work and school so I'm a strong advocate for side quests in life :). From cycling around Vancouver to mixing music, here are some of my notable adventures (click around!) ✨:
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Side Quests</h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sideQuests.map((quest, i) => (
                <motion.div
                  key={quest.id}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all cursor-pointer ${
                    selectedActivity === quest.id 
                      ? 'bg-amber-200 dark:bg-amber-700/50 shadow-md' 
                      : 'hover:bg-amber-100 dark:hover:bg-amber-800/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onClick={() => setSelectedActivity(quest.id)}
                >
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-2xl"
                  >
                    {quest.emoji}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{quest.label}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{quest.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          key={selectedActivity}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"></h3>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm h-[400px] sm:h-[500px] overflow-y-auto">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                {currentContent.title.split(' ').pop()}
              </motion.div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{currentContent.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{currentContent.subtitle}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <img 
                src={currentContent.image} 
                alt={currentContent.title}
                className="w-full h-48 sm:h-64 md:h-80 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {currentContent.description}
              </p>

              {currentContent.achievements && (
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {currentContent.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {currentContent.link !== "#" && (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6"
              >
                <a 
                  href={currentContent.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {currentContent.linkText} <ExternalLink className="h-4 w-4"/>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section id="contact" aria-label="Contact" className="py-16">
      <SectionHeader id="contact" title="Contact" />
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Email <a href="mailto:shariqihassan@gmail.com" className="underline font-medium text-gray-900 dark:text-white">shariqihassan@gmail.com</a>. Based in Vancouver, BC.
        </p>
      </motion.div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="mt-16 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
      <IconLink href="https://github.com/shariqimran" label="GitHub">
        <Github className="h-4 w-4"/> GitHub
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/shariqimran/" label="LinkedIn">
        <Linkedin className="h-4 w-4"/> LinkedIn
      </IconLink>
              <IconLink href="mailto:shariqihassan@gmail.com" label="Email">
        <Mail className="h-4 w-4"/> Email
      </IconLink>
      <span className="mt-2 sm:mt-0 sm:mt-0 sm:ml-2">© {new Date().getFullYear()} Shariq :')</span>
    </footer>
  );
}
