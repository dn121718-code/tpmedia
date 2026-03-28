import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Truck, Youtube, MousePointer2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen flex flex-col justify-center">
      <div className="section-container">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            LET'S <span className="text-racing-red italic">CONNECT</span>
          </motion.h1>
          <p className="text-brand-gray-600 font-bold uppercase tracking-widest text-sm max-w-lg mx-auto leading-relaxed">
            Ready to start your next creative project? Choose a platform below to get started instantly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <motion.a 
            href="https://discord.com/invite/FtYBxZxTBF" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex flex-col items-center justify-center p-16 bg-[#5865F2]/5 border border-[#5865F2]/20 rounded-sm overflow-hidden transition-all duration-700 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 hover:shadow-2xl hover:shadow-[#5865F2]/10"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#5865F2]" />
            <MessageCircle size={80} className="text-[#5865F2] mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">JOIN DISCORD</h3>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Direct Support & Collaboration</p>
            <MousePointer2 className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
          </motion.a>

          <motion.a 
            href="https://truckersmp.com/vtc/73933-tamil_pasanga" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex flex-col items-center justify-center p-12 bg-racing-red/5 border border-racing-red/20 rounded-sm overflow-hidden transition-all duration-700 hover:bg-racing-red/20 hover:border-racing-red/50 hover:shadow-2xl hover:shadow-racing-red/10"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-racing-red" />
            <Truck size={64} className="text-racing-red mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">TAMIL PASANGA VTC</h3>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Official TruckersMP Profile</p>
            <MousePointer2 className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
          </motion.a>

          <motion.a 
            href="https://www.youtube.com/@TamilPasangaVTC" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-white" />
            <Youtube size={64} className="text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">WATCH US</h3>
            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Official YouTube Channel</p>
            <MousePointer2 className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-24"
        >
          <p className="text-brand-gray-600 font-bold uppercase tracking-[0.5em] text-[10px] italic">
            TAMIL PASANGA MEDIA © ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
