import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "March Public Convoy"];

  const images = [
    { id: 1, src: "/assets/TP SG 1.png", category: "General" },
    { id: 2, src: "/assets/TP SG 2.png", category: "General" },
    { id: 3, src: "/assets/TPPVT 13.png", category: "General" },
    { id: 4, src: "/assets/TPPVT 14.png", category: "General" },
    { id: 5, src: "/assets/de1-mas.png", category: "General" },
    { id: 6, src: "/assets/de2-mas.png", category: "General" },
    { id: 7, src: "/assets/21212.png", category: "General" },
    { id: 8, src: "/assets/23212.png", category: "General" },
    { id: 9, src: "/assets/32121.png", category: "General" },
    { id: 10, src: "/assets/1.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 11, src: "/assets/2.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 12, src: "/assets/3.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 13, src: "/assets/4.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 14, src: "/assets/5.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 15, src: "/assets/6.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 16, src: "/assets/7.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 17, src: "/assets/8.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 18, src: "/assets/9.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 19, src: "/assets/10.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 20, src: "/assets/11.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 21, src: "/assets/12.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 22, src: "/assets/13.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 23, src: "/assets/14.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 24, src: "/assets/15.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 25, src: "/assets/16.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 26, src: "/assets/17.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 27, src: "/assets/32.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 28, src: "/assets/37.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
    { id: 29, src: "/assets/EVENT_IS_SUPERVISED_4.jpg", category: "March Public Convoy", caption: "Covered by TP Media on March Public Convoy" },
  ];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 italic"
          >
            THE <span className="text-racing-red">GALLERY</span>
          </motion.h1>
          <p className="text-brand-gray-600 font-bold uppercase tracking-[0.3em] text-xs">Capturing the pure essence of the virtual road.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 font-black uppercase tracking-tighter italic transition-all duration-300 rounded-sm border ${
                activeCategory === cat 
                  ? "bg-racing-red border-racing-red text-white scale-110 shadow-lg shadow-racing-red/20" 
                  : "bg-transparent border-white/10 text-brand-gray-600 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-none overflow-hidden bg-brand-gray-900"
                onClick={() => setSelectedImage(image)}
              >
              <img 
                src={image.src} 
                alt="Gallery Item" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-50" 
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-4 bg-racing-red text-white flex items-center gap-2 font-black uppercase tracking-tighter italic">
                  VIEW FRAME <Maximize2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-brand-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white hover:text-racing-red transition-colors p-2 bg-white/5 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt="Full preview" 
                  className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl shadow-racing-red/20"
                />
                
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-racing-red/10 border border-racing-red/30 rounded-sm">
                      <Camera size={20} className="text-racing-red" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-tighter italic text-xl">
                        {selectedImage.caption || `CINEMATIC FRAME #0${selectedImage.id}`}
                      </h4>
                      <p className="text-brand-gray-600 text-xs font-bold uppercase tracking-widest mt-1">TAMIL PASANGA MEDIA OFFICIAL PRODUCTION</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
