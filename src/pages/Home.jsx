import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Video, Camera, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleText = "THE ART OF THE ROAD";
  const subTitleText = "BEYOND THE FRAME";

  return (
    <div className="bg-brand-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black z-10" />
        
        {/* Video or Image Fallback */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/TP SG 1.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-110 animate-pulse-slow transition-transform duration-[10s]"
          />
        </div>

        <div className="section-container relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Proud Team Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-racing-red/10 border border-racing-red/20 rounded-full mb-10 text-racing-red"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] italic">PROUD TEAM OF TAMIL PASANGA VTC</span>
            </motion.div>

            {/* Cinematic Animated Title */}
            <motion.h1 
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none"
            >
              {titleText.split("").map((char, index) => (
                <motion.span key={index} variants={letter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-8xl font-black italic text-racing-red tracking-tighter mb-12"
            >
              {subTitleText}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="text-lg md:text-xl text-brand-gray-100 max-w-2xl mx-auto mb-10 font-bold uppercase tracking-[0.2em] opacity-60"
            >
              TAMIL PASANGA MEDIA: DEFINING VIRTUAL <span className="text-white">CINEMA</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/gallery" className="btn-primary flex items-center gap-2 group">
                EXPLORE WORK <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center gap-2">
                HIRE THE CREW <Video size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-brand-gray-600 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-racing-red rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Services Section */}
      <section className="py-24 bg-brand-black border-y border-white/5">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl uppercase font-black tracking-tight mb-4">
              CRAFTING <span className="text-racing-red italic">MOTION</span>
            </h2>
            <p className="text-brand-gray-600 font-bold uppercase tracking-[0.2em] text-xs">A New Level of Virtual Media</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Video size={40} className="text-racing-red" />, 
                title: "Convoy Coverage", 
                desc: "Cinematic recording and live relay support for elite virtual convoys." 
              },
              { 
                icon: <Camera size={40} className="text-racing-red" />, 
                title: "Video Intros", 
                desc: "High-octane starting sequences that define your competitive brand." 
              },
              { 
                icon: <Users size={40} className="text-racing-red" />, 
                title: "Cinematics", 
                desc: "The heartbeat of the trucking world captured in stunning 4K motion." 
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-brand-gray-900 p-10 border border-white/5 hover:border-racing-red/20 transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">{service.title}</h3>
                <p className="text-brand-gray-600 leading-relaxed font-bold uppercase text-xs tracking-widest">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assests/TP SG 2.jpg" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
        </div>
        <div className="section-container relative z-10">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
            ELEVATE <span className="text-racing-red">EVERY</span> <br /> 
            <span className="italic">VIRTUAL FRAME</span>
          </h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-3 transition-all duration-500 hover:tracking-[0.2em]">
            START A PROJECT <MessageCircle size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
