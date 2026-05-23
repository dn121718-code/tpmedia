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
        
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/TP SG 1.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_6s_ease-in-out_infinite] transition-transform duration-[10s]"
          />
        </div>

        <div className="section-container relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
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
              className="inline-flex items-center gap-2 px-6 py-2 bg-racing-red/10 border border-racing-red/20 rounded-full mb-8 text-racing-red"
            >
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] italic">PROUD TEAM OF TAMIL PASANGA VTC</span>
            </motion.div>

            {/* Cinematic Animated Title */}
            <motion.h1 
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 leading-none select-none text-white break-words"
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
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic text-racing-red tracking-tighter mb-10 select-none"
            >
              {subTitleText}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="text-sm sm:text-base md:text-lg text-brand-gray-100 max-w-2xl mx-auto mb-10 font-bold uppercase tracking-[0.2em] opacity-65 leading-relaxed"
            >
              TAMIL PASANGA MEDIA: DEFINING VIRTUAL <span className="text-white border-b-2 border-racing-red pb-1">CINEMA</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Link to="/gallery" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
                EXPLORE WORK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                HIRE THE CREW <Video size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
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
      <section className="py-24 bg-brand-black border-y border-white/5 relative">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-black tracking-tight mb-4 text-white">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, borderColor: 'rgba(230,0,0,0.3)' }}
                className="bg-brand-gray-900 p-8 sm:p-10 border border-white/5 hover:border-racing-red/20 transition-all duration-300 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 bg-brand-black w-fit p-4 rounded-sm border border-white/5 group-hover:bg-racing-red/10">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 tracking-tighter italic text-white">{service.title}</h3>
                  <p className="text-brand-gray-600 leading-relaxed font-bold uppercase text-[10px] sm:text-xs tracking-widest">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Theater Section */}
      <section className="py-24 bg-brand-black/40 border-b border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-racing-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white"
            >
              CINEMATIC <span className="text-racing-red italic">SHOWCASE</span>
            </motion.h2>
            <p className="text-brand-gray-600 font-bold uppercase tracking-[0.2em] text-xs">Experience the adrenaline of the road in high definition</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video max-w-5xl mx-auto bg-brand-gray-900 border border-white/10 shadow-2xl rounded-sm overflow-hidden group shadow-racing-red/5"
          >
            <iframe 
              src="https://www.youtube.com/embed/S8KQn2lPbO0"
              title="Tamil Pasanga VTC Cinematic Showcase"
              className="w-full h-full border-0 absolute inset-0 z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
            {/* Visual Glassmorphic Frame Borders */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none z-20 group-hover:border-racing-red/20 transition-colors duration-500" />
            <div className="absolute top-4 left-4 z-20 bg-brand-black/90 px-4 py-2 border border-white/5 rounded-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-racing-red rounded-full animate-ping" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white italic">OFFICIAL STREAM / PROMO</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* March Public Convoy Footage Section */}
      <section className="py-24 bg-brand-black overflow-hidden relative">
        <div className="section-container mb-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-racing-red pl-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-white">
              MARCH PUBLIC <span className="text-racing-red italic">CONVOY</span>
            </h2>
            <p className="text-brand-gray-600 font-bold uppercase tracking-[0.2em] text-xs">
              Footage by TP Media In March Public Convoy of Tamil Pasanga VTC
            </p>
          </motion.div>
        </div>

        {/* 3 Large Images Grid */}
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.15, duration: 0.6 }}
                className="aspect-video bg-brand-gray-900 overflow-hidden border border-white/5 group relative rounded-sm shadow-lg hover:shadow-racing-red/5 hover:border-racing-red/20 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={`/assets/${num}.jpg`} 
                  alt={`Convoy Highlight ${num}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <p className="text-white font-black uppercase tracking-tighter italic text-sm sm:text-base">MARCH CONVOY FRAME #{num}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link to="/gallery" className="btn-outline flex items-center gap-3 hover:bg-white hover:text-brand-black transition-all duration-500">
              VIEW FULL GALLERY <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/TP SG 2.png" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-15 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
        </div>
        <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight text-white select-none">
            ELEVATE <span className="text-racing-red">EVERY</span> <br /> 
            <span className="italic">VIRTUAL FRAME</span>
          </h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-3 transition-all duration-500 hover:tracking-[0.2em]">
            START A PROJECT <MessageCircle size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
