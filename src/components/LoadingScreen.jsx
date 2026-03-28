import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[10000] bg-brand-black flex items-center justify-center">
      <div className="relative">
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-racing-red/20 blur-[60px] rounded-full"
        />

        <div className="relative flex flex-col items-center gap-8">
          {/* Moving Truck Icon */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <motion.div
              animate={{
                x: [-15, 15, -15],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-racing-red drop-shadow-[0_0_15px_rgba(230,0,0,0.5)]"
            >
              <Truck size={80} strokeWidth={1.5} />
            </motion.div>
            
            {/* Speed Lines */}
            <div className="absolute top-1/2 -left-12 flex flex-col gap-2">
              <motion.div 
                animate={{ x: [-10, 30], opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                className="h-1 w-8 bg-racing-red/40 rounded-full"
              />
              <motion.div 
                animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                className="h-1 w-6 bg-racing-red/30 rounded-full"
              />
              <motion.div 
                animate={{ x: [-5, 25], opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                className="h-1 w-10 bg-racing-red/20 rounded-full"
              />
            </div>

            {/* Smoke Particles */}
            <div className="absolute -left-4 bottom-4 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [-10, -40],
                    y: [0, -20],
                    opacity: [0, 0.4, 0],
                    scale: [0.5, 1.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="w-3 h-3 bg-brand-gray-600/20 rounded-full blur-[2px]"
                />
              ))}
            </div>
          </div>

          {/* Loading Text */}
          <div className="flex flex-col items-center">
            <motion.h2 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white font-black uppercase tracking-[0.5em] italic text-xl"
            >
              LOADING
            </motion.h2>
            <div className="mt-4 w-48 h-1 bg-brand-gray-900 overflow-hidden relative">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-racing-red"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
