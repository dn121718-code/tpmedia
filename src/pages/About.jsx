import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Users, Camera, Mail } from 'lucide-react';

const About = () => {
  const team = [
    { name: "Powerful gaming", role: "Founder", icon: <Compass className="text-racing-red" size={24} /> },
    { name: "Kishore Gaming", role: "Media Manager", icon: <Target className="text-racing-red" size={24} /> },
    { name: "Masgideon", role: "Media Team", icon: <Camera className="text-racing-red" size={24} /> },
    { name: "Maari", role: "Media Team", icon: <Camera className="text-racing-red" size={24} /> },
    { name: "Sparten Gaming", role: "Media Team", icon: <Camera className="text-racing-red" size={24} /> },
    { name: "Hafiz Hazrat", role: "Media Team", icon: <Camera className="text-racing-red" size={24} /> },
  ];

  return (
    <div className="bg-brand-black pt-32 pb-24">
      <div className="section-container">
        {/* Intro */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            WHO WE <span className="text-racing-red">ARE</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-xl text-brand-gray-600 font-medium leading-relaxed"
          >
            <p className="text-white font-bold uppercase tracking-widest text-sm mb-4">Driving Creativity Through Media</p>
            <p>
              Tamil Pasanga Media is a specialized creative agency born from the heart of the Tamil Pasanga VTC community. 
              We are dedicated to capturing the most epic moments in TruckersMP and transforming them into cinematic experiences.
            </p>
            <p>
              Our mission is to provide professional-grade media solutions for VTCs, YouTubers, and the wider gaming community, 
              ensuring every convoy and event is immortalized with the highest quality standards.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 bg-brand-gray-900 border border-white/5 relative group">
            <div className="absolute top-0 left-0 w-1 h-0 bg-racing-red group-hover:h-full transition-all duration-500" />
            <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3 italic">
              <Compass className="text-racing-red" size={32} /> OUR VISION
            </h3>
            <p className="text-brand-gray-600 font-medium leading-relaxed">
              To be the leading global media team for the TruckersMP community, 
              setting the gold standard for cinematic virtual photography and videography.
            </p>
          </div>
          <div className="p-10 bg-brand-gray-900 border border-white/5 relative group text-right flex flex-col items-end">
            <div className="absolute top-0 right-0 w-1 h-0 bg-racing-red group-hover:h-full transition-all duration-500" />
            <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3 italic">
              OUR MISSION <Target className="text-racing-red" size={32} />
            </h3>
            <p className="text-brand-gray-600 font-medium leading-relaxed">
              To empower players and communities with professional media services 
              that showcase their passion, hard work, and unity in the virtual world.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-widest mb-4">
            PROUD <span className="text-racing-red">TEAM</span>
          </h2>
          <p className="text-brand-gray-600 font-bold uppercase tracking-widest text-sm">The minds behind the lens</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-brand-gray-900 border border-white/5 p-8 relative overflow-hidden group text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-racing-red/20"
            >
              <div className="mb-4">
                {member.icon}
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-2 group-hover:text-racing-red transition-colors">
                {member.name}
              </h4>
              <p className="text-brand-gray-600 font-bold uppercase tracking-widest text-xs">
                {member.role}
              </p>
              <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="p-2 bg-brand-black text-white hover:text-racing-red"><Camera size={16} /></a>
                <a href="#" className="p-2 bg-brand-black text-white hover:text-racing-red"><Mail size={16} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
