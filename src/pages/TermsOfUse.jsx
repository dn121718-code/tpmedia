import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, Ban, FileText, AlertTriangle, XCircle, ArrowUp } from 'lucide-react';

const TermsOfUse = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sections = [
    {
      title: "ACCEPTANCE OF TERMS",
      icon: <Scale className="text-racing-red" size={24} />,
      content: "By using our Service, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must not use the Service."
    },
    {
      title: "ELIGIBILITY",
      icon: <Users className="text-racing-red" size={24} />,
      content: "You must be at least 13 years old to use this Service. If you are under 18, you must have permission from a parent or legal guardian."
    },
    {
      title: "REGISTRATION & ACCOUNTS",
      icon: <FileText className="text-racing-red" size={24} />,
      content: "Some features may require an account. You agree to provide accurate information, keep your login credentials secure, and be responsible for activity under your account. You must not share or transfer your account to others."
    },
    {
      title: "USER CONDUCT",
      icon: <Ban className="text-racing-red" size={24} />,
      content: "You agree not to post offensive, abusive, or defamatory content; engage in harassment, hate speech, or discriminatory language; promote illegal activities; or cheat, hack, or exploit the game or community. We reserve the right to warn, mute, suspend, or ban users who violate rules."
    },
    {
      title: "CONTENT & LICENSING",
      icon: <FileText className="text-racing-red" size={24} />,
      content: "You retain ownership of content you post (like text, logos, screenshots), but by posting, you grant Tamil Pasanga VTC a non-exclusive, royalty-free license to use, display, and share it on the Service and promotions."
    },
    {
      title: "PROHIBITED CONTENT",
      icon: <XCircle className="text-racing-red" size={24} />,
      content: "You must not post copyrighted material without permission; NSFW, illegal, or harmful content; or links to malware, phishing, or harmful sites."
    },
    {
      title: "DISCLAIMERS & LIABILITY",
      icon: <AlertTriangle className="text-racing-red" size={24} />,
      content: "THE SERVICE IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND. Tamil Pasanga VTC is not liable for lost data, damages from use of the Service, or in-game/real-world losses to the maximum extent allowed by law."
    }
  ];

  return (
    <div className="bg-brand-black pt-32 pb-24 min-h-screen">
      <div className="section-container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-racing-red/10 border border-racing-red/20 rounded-full mb-6 text-racing-red">
            <Scale size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest italic">USER AGREEMENT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">
            TERMS OF <span className="text-racing-red">USE</span>
          </h1>
          <p className="text-brand-gray-600 font-bold uppercase tracking-widest text-xs">Last Updated: 21/12/2025</p>
        </motion.div>

        <div className="space-y-8">
          <section className="p-10 bg-brand-gray-900 border border-white/5 rounded-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] font-black text-6xl text-white italic group-hover:opacity-10 transition-opacity pointer-events-none">WELCOME</div>
            <p className="text-lg italic text-brand-gray-100 font-medium leading-relaxed max-w-2xl relative z-10">
              Welcome to Tamil Pasanga VTC (“we,” “us,” “our”). These Terms of Use (“Terms”) govern your access to and use of our website, services, community platforms, and related content (collectively, the “Service”). By accessing or using the Service, you agree to these Terms.
            </p>
          </section>

          <div className="grid grid-cols-1 gap-6">
            {sections.map((section, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-brand-gray-900 border border-white/5 hover:border-racing-red/20 transition-all duration-300"
              >
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white mb-4 flex items-center gap-3">
                  {section.icon} {section.title}
                </h3>
                <p className="text-brand-gray-600 font-medium leading-relaxed">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          <section className="pt-12 border-t border-white/5 space-y-8">
            <div className="p-8 bg-brand-black border border-white/5 rounded-sm">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4">TERMINATION</h2>
              <p className="text-brand-gray-600">We may suspend or terminate your access at any time for violation of these Terms or for any other reason, with or without notice.</p>
            </div>
            
            <div className="p-8 bg-brand-gray-900 border border-racing-red/20 rounded-sm">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-racing-red mb-4">GOVERNING LAW</h2>
              <p className="text-white font-bold uppercase tracking-widest text-sm italic">These Terms are governed by the laws of Tamil Nadu, India.</p>
            </div>
          </section>
        </div>

        <button 
          onClick={scrollToTop}
          className="mt-24 w-full py-6 border border-white/5 hover:bg-racing-red hover:text-white transition-all duration-500 uppercase font-black tracking-[0.5em] flex items-center justify-center gap-4 italic group"
        >
          ACKNOWLEDGE & BACK TO TOP <ArrowUp size={20} className="group-hover:-translate-y-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default TermsOfUse;
