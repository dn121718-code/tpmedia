import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recruitment = () => {
  return (
    <div className="bg-brand-black min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-racing-red/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gray-600/5 rounded-full blur-[120px] -z-0" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-brand-gray-900 border border-white/5 rounded-full mb-10 text-racing-red animate-pulse">
            <Clock size={16} />
            <span className="text-sm font-black uppercase tracking-widest italic">APPLICATION STATUS: CLOSED</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-tight">
            JOIN THE <span className="text-racing-red italic">CREATIVE</span> <br /> 
            FORCE OF <span className="text-brand-gray-600">MEDIA</span>
          </h1>
          
          <p className="text-2xl text-brand-gray-600 font-bold uppercase tracking-widest mb-12">
            RECRUITMENT OPENS <span className="text-racing-red italic underline">SOON</span>
          </p>

          <div className="p-10 bg-brand-gray-900 border border-white/5 relative group mb-16 max-w-2xl mx-auto text-left">
            <div className="absolute top-0 left-0 w-1 h-full bg-racing-red" />
            <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3 italic">
              <AlertCircle className="text-racing-red" size={24} /> STAY PREPARED
            </h3>
            <p className="text-brand-gray-600 font-medium leading-relaxed mb-6">
              We are currently reorganizing our media department to better serve the community. 
              Applications for photographers, videographers, and editors will be launched on our Discord server shortly.
            </p>
            <div className="flex gap-4">
              <div className="bg-brand-black px-4 py-2 border border-white/5 text-xs font-bold uppercase tracking-widest opacity-50">PHOTOGRAPHY</div>
              <div className="bg-brand-black px-4 py-2 border border-white/5 text-xs font-bold uppercase tracking-widest opacity-50">VIDEOGRAPHY</div>
              <div className="bg-brand-black px-4 py-2 border border-white/5 text-xs font-bold uppercase tracking-widest opacity-50">EDITING</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://discord.com/invite/FtYBxZxTBF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary flex items-center gap-3 italic tracking-tighter text-xl scale-110 hover:scale-125 transition-transform"
            >
              JOIN OUR DISCORD <MessageCircle size={24} />
            </a>
            <Link to="/" className="text-brand-gray-100 hover:text-racing-red font-bold uppercase tracking-widest text-sm flex items-center gap-2 group transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recruitment;
