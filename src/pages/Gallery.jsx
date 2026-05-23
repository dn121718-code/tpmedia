import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera, RefreshCw } from 'lucide-react';
import galleryImages from '../data/galleryData.json';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9); // Initial batch size for performance

  const categories = ["All", "General", "March Public Convoy"];

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    setVisibleCount(9); // Reset visible count on category change
    return activeCategory === "All" 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  // Paginated slice
  const paginatedImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  const hasMore = filteredImages.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 italic"
          >
            THE <span className="text-racing-red">GALLERY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray-100 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Capturing the pure essence of the virtual road.
          </motion.p>
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

        {/* Gallery Grid with dynamic layout animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {paginatedImages.map((image) => (
              <motion.div 
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-none overflow-hidden bg-brand-gray-900 aspect-[16/9] border border-white/5"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.caption || "Gallery Item"} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-50" 
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-brand-black/40">
                  <div className="p-4 bg-racing-red text-white flex items-center gap-2 font-black uppercase tracking-tighter italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    VIEW FRAME <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-16"
          >
            <button 
              onClick={handleLoadMore}
              className="btn-outline flex items-center gap-3 group hover:border-racing-red hover:text-racing-red"
            >
              LOAD MORE WORK <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </motion.div>
        )}

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
                  className="max-w-full max-h-[80vh] object-contain border border-white/10 shadow-2xl shadow-racing-red/20"
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
                      <p className="text-brand-gray-600 text-xs font-bold uppercase tracking-widest mt-1">
                        TAMIL PASANGA MEDIA OFFICIAL PRODUCTION
                      </p>
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
