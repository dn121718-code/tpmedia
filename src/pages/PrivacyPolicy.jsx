import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Cookie, ExternalLink, ArrowUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen">
      <div className="section-container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-racing-red/10 border border-racing-red/20 rounded-full mb-6 text-racing-red">
            <Shield size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest italic">LEGAL DOCUMENTATION</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">
            PRIVACY <span className="text-racing-red">POLICY</span>
          </h1>
          <p className="text-brand-gray-600 font-bold uppercase tracking-widest text-xs">Last Updated: 21/12/2025</p>
        </motion.div>

        <div className="space-y-12 text-brand-gray-100/80 leading-relaxed font-medium">
          <section className="p-8 bg-brand-gray-900 border border-white/5 rounded-sm">
            <p className="text-lg italic text-white/90">
              Tamil Pasanga VTC (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information of our members and visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-6 flex items-center gap-3">
              <Eye className="text-racing-red" size={24} /> INFORMATION WE COLLECT
            </h2>
            <p className="mb-4">We may collect the following information:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Name or username', 'Email address', 'Discord ID', 'TruckersMP ID', 'Game-related information (ETS2 / ATS profile details)'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-4 bg-brand-black border border-white/5 rounded-sm text-sm font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-racing-red rounded-full" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 opacity-60 text-xs italic uppercase mt-4">We collect this information only when you voluntarily provide it (for example, during registration or applications).</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-6 flex items-center gap-3">
              <Lock className="text-racing-red" size={24} /> HOW WE USE YOUR INFORMATION
            </h2>
            <div className="space-y-4">
              {[
                'Manage VTC membership',
                'Communicate with members',
                'Organize events and convoys',
                'Improve our services and community experience'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 border-l-2 border-racing-red bg-brand-gray-900">
                  <span className="text-racing-red font-black">0{idx + 1}</span>
                  <span className="font-bold uppercase tracking-widest text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">DATA PROTECTION</h2>
            <p>We take reasonable steps to protect your personal data. Your information is not sold, traded, or shared with third parties unless required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 flex items-center gap-3">
              <Cookie className="text-racing-red" size={24} /> COOKIES
            </h2>
            <p>Our website may use cookies to improve user experience. Cookies help us understand how visitors use our site. You can disable cookies in your browser settings if you prefer.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">THIRD-PARTY SERVICES</h2>
            <p className="mb-4">We may use third-party platforms such as:</p>
            <div className="flex flex-wrap gap-4">
              {['Discord', 'TruckersMP', 'Google services'].map((item) => (
                <span key={item} className="px-4 py-2 bg-brand-black border border-white/10 text-xs font-bold uppercase tracking-widest">{item}</span>
              ))}
            </div>
            <p className="mt-4 italic opacity-60 text-sm">These services have their own privacy policies, and we are not responsible for their practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">CHILDREN’S INFORMATION</h2>
            <p>Tamil Pasanga VTC does not knowingly collect personal information from children under the age required by TruckersMP or applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">YOUR CONSENT</h2>
            <p>By using our website or joining Tamil Pasanga VTC, you agree to this Privacy Policy.</p>
          </section>

          <section className="pt-12 border-t border-white/5">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">CONTACT US</h2>
            <p className="mb-6">If you have any questions about this Privacy Policy, you can contact us via:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-brand-gray-900 border border-white/5 rounded-sm">
                <h4 className="text-racing-red font-black uppercase text-xs mb-2">Primary Method</h4>
                <p className="text-white font-bold uppercase tracking-wider">Discord Server</p>
              </div>
              <div className="p-6 bg-brand-gray-900 border border-white/5 rounded-sm">
                <h4 className="text-racing-red font-black uppercase text-xs mb-2">Alternative</h4>
                <p className="text-white font-bold uppercase tracking-wider">Official VTC communication channels</p>
              </div>
            </div>
          </section>
        </div>

        <button 
          onClick={scrollToTop}
          className="mt-24 w-full py-6 border border-white/5 hover:bg-racing-red hover:text-white transition-all duration-500 uppercase font-black tracking-[0.5em] flex items-center justify-center gap-4 italic group"
        >
          BACK TO TOP <ArrowUp size={20} className="group-hover:-translate-y-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
