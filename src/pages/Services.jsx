import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video size={48} className="text-racing-red" />,
      title: "CONVOY COVERAGE",
      description: "Professional multi-camera coverage of your VTC convoys. We handle camera work, drone shots, and post-production editing to make your events look legendary.",
      features: ["Stable Camera Shots", "4K Resolution", "Drone Perspective", "Color Grading"]
    },
    {
      icon: <Scissors size={48} className="text-racing-red" />,
      title: "VIDEO INTROS",
      description: "Custom animated introductions for your YouTube channel or VTC profile. We create high-impact visuals that grab your audience's attention instantly.",
      features: ["3D Animation", "Sound Design", "Custom Logo Integration", "Fast Turnaround"]
    },
    {
      icon: <Camera size={48} className="text-racing-red" />,
      title: "CINEMATIC PHOTOGRAPHY",
      description: "High-end virtual photography for TruckersMP and ATS/ETS2. We capture the beauty of the road and the strength of your fleet in every shot.",
      features: ["Composition Focus", "High-Def Textures", "Custom Lightning", "Branded Overlays"]
    }
  ];

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-20 animate-fade-in">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6"
          >
            OUR <span className="text-racing-red italic">SERVICES</span>
          </motion.h1>
          <p className="text-brand-gray-600 font-bold uppercase tracking-widest text-sm max-w-lg mx-auto leading-relaxed">
            Premium media solutions tailored for elite virtual communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15, borderColor: 'rgba(230, 0, 0, 0.3)' }}
              className="bg-brand-gray-900 border border-white/5 p-12 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-racing-red/5"
            >
              <div className="mb-10 p-4 bg-brand-black w-fit rounded-sm group-hover:bg-racing-red/10 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-racing-red transition-colors duration-500 italic">
                {service.title}
              </h3>
              <p className="text-brand-gray-600 font-medium leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/40">
                    <div className="w-1.5 h-1.5 bg-racing-red rounded-full" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-black text-8xl text-white italic group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
