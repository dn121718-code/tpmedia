import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  MessageCircle, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight, 
  User, 
  FolderOpen, 
  Link as LinkIcon,
  Check, 
  Sparkles, 
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendApplicationWebhook } from '../services/webhook';

const Recruitment = () => {
  const [isApplying, setIsApplying] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  // Multi-step form state initialization matching user requests
  const [formData, setFormData] = useState({
    name: '',
    discordTag: '',
    isVTCMember: false,
    isOtherVTCMember: false, // Track other VTC statuses
    age: '',
    portfolio: '', // Google Drive Link
    truckersmp: '',
    agreeTerms: false,
    motivation: ''
  });

  const [errors, setErrors] = useState({});

  // Input handlers
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Validation routines per step
  const validateStep = (step) => {
    const stepErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) stepErrors.name = "Full Name is required";
      if (!formData.discordTag.trim()) stepErrors.discordTag = "Discord ID is required";
      if (!formData.age) {
        stepErrors.age = "Age is required";
      } else if (parseInt(formData.age) < 13) {
        stepErrors.age = "You must be at least 13 years old";
      }
    }
    if (step === 2) {
      if (!formData.portfolio.trim()) {
        stepErrors.portfolio = "Previous works portfolio link is required";
      } else if (!formData.portfolio.includes("http://") && !formData.portfolio.includes("https://")) {
        stepErrors.portfolio = "Please provide a valid URL starting with http:// or https://";
      }

      if (!formData.truckersmp.trim()) {
        stepErrors.truckersmp = "TruckersMP profile link is required";
      } else if (!formData.truckersmp.includes("truckersmp.com")) {
        stepErrors.truckersmp = "Please enter a valid TruckersMP URL (e.g. truckersmp.com/user/...)";
      }
    }
    if (step === 3) {
      if (!formData.agreeTerms) {
        stepErrors.agreeTerms = "You must agree to the TP Media terms and conditions";
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    try {
      const res = await sendApplicationWebhook(formData);
      setSubmitResult(res);
      if (res.success) {
        setCurrentStep(4);
      }
    } catch (err) {
      setSubmitResult({ success: false, error: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Stepper Header helper
  const renderStepIndicator = () => {
    const stepNames = ["Profile", "Showcase", "Agreements", "Filed"];
    return (
      <div className="flex items-center justify-between mb-12 max-w-xl mx-auto">
        {stepNames.map((name, index) => {
          const stepNum = index + 1;
          const isActive = currentStep === stepNum;
          const isCompleted = currentStep > stepNum;
          return (
            <React.Fragment key={stepNum}>
              {index > 0 && (
                <div className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-colors duration-500 ${
                  currentStep >= stepNum ? 'bg-racing-red' : 'bg-brand-gray-800'
                }`} />
              )}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 ${
                  isActive 
                    ? 'bg-racing-red text-white scale-110 shadow-lg shadow-racing-red/20 border border-racing-red' 
                    : isCompleted 
                      ? 'bg-racing-red text-white' 
                      : 'bg-brand-gray-900 border border-white/5 text-brand-gray-600'
                }`}>
                  {isCompleted ? <Check size={14} /> : stepNum}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest mt-2 hidden sm:block ${
                  isActive ? 'text-racing-red' : 'text-brand-gray-600'
                }`}>
                  {name}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-brand-black min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-racing-red/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/3 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="section-container relative z-10 w-full px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {!isApplying ? (
            /* ================= OPEN RECRUITMENT INTRO ================= */
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Active Recruitment Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-racing-red/10 border border-racing-red/20 rounded-full mb-10 text-racing-red animate-[pulse_2s_infinite]">
                <Clock size={16} />
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest italic">APPLICATION STATUS: OPEN</span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-tight text-white select-none">
                JOIN THE <span className="text-racing-red italic">CREATIVE</span> <br /> 
                FORCE OF <span className="text-brand-gray-600">MEDIA</span>
              </h1>
              
              <p className="text-lg sm:text-2xl text-brand-gray-600 font-bold uppercase tracking-widest mb-12 leading-relaxed">
                BUILD THE CINEMATIC VISION OF <span className="text-white">TAMIL PASANGA VTC</span>
              </p>

              <div className="p-8 sm:p-10 bg-brand-gray-900 border border-white/5 relative group mb-16 max-w-2xl mx-auto text-left rounded-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-racing-red" />
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 flex items-center gap-3 italic text-white">
                  <Sparkles className="text-racing-red" size={24} /> CRITERIA & EXPECTATIONS
                </h3>
                <p className="text-brand-gray-600 font-medium text-sm leading-relaxed mb-6">
                  We are looking for passionate players who can capture epic virtual moments in TruckersMP and ATS/ETS2. 
                  If you have skill in composition, color grading, cinematic video editing, or virtual photography, we want to hear from you!
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-brand-black px-4 py-2 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/50">PHOTOGRAPHY</div>
                  <div className="bg-brand-black px-4 py-2 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/50">VIDEOGRAPHY</div>
                  <div className="bg-brand-black px-4 py-2 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/50">VIDEO EDITING</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => setIsApplying(true)}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 italic tracking-tighter text-xl px-10 py-4 scale-105 hover:scale-110 transition-transform"
                >
                  APPLY NOW <ArrowRight size={22} />
                </button>
                <Link to="/" className="text-brand-gray-100 hover:text-racing-red font-bold uppercase tracking-widest text-sm flex items-center gap-2 group transition-colors">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ================= MULTI-STEP WIZARD ================= */
            <motion.div
              key="wizard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto bg-brand-gray-900 border border-white/5 p-8 sm:p-12 relative rounded-sm shadow-2xl"
            >
              {/* Cancel Button */}
              <button 
                onClick={() => {
                  setIsApplying(false);
                  setCurrentStep(1);
                }}
                className="absolute top-6 right-6 text-brand-gray-600 hover:text-racing-red transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-wider"
              >
                <ArrowLeft size={12} /> CANCEL
              </button>

              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-white">
                MEDIA TEAM <span className="text-racing-red">APPLICATION</span>
              </h2>

              {renderStepIndicator()}

              <form onSubmit={handleSubmit} className="space-y-8">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    /* STEP 1: PROFILE / BASIC INFO */
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-white/5 pb-4 mb-6 flex items-center gap-2">
                        <User size={18} className="text-racing-red" />
                        <h4 className="font-black text-sm uppercase tracking-wider text-white">Personal Profile</h4>
                      </div>

                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleTextChange}
                          placeholder="e.g. Kishore Kumar" 
                          className="bg-brand-black border border-white/5 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-racing-red transition-colors w-full font-semibold"
                        />
                        {errors.name && <span className="text-racing-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Discord ID */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">Discord ID *</label>
                          <input 
                            type="text" 
                            name="discordTag"
                            value={formData.discordTag}
                            onChange={handleTextChange}
                            placeholder="e.g. kishore_gaming" 
                            className="bg-brand-black border border-white/5 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-racing-red transition-colors w-full font-semibold"
                          />
                          {errors.discordTag && <span className="text-racing-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10} /> {errors.discordTag}</span>}
                        </div>

                        {/* Age */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">Age *</label>
                          <input 
                            type="number" 
                            name="age"
                            value={formData.age}
                            onChange={handleTextChange}
                            placeholder="e.g. 18" 
                            className="bg-brand-black border border-white/5 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-racing-red transition-colors w-full font-semibold"
                          />
                          {errors.age && <span className="text-racing-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10} /> {errors.age}</span>}
                        </div>
                      </div>

                      {/* VTC Member Yes/No Options */}
                      <div className="bg-brand-black p-5 border border-white/5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-racing-red/20 transition-all">
                        <div>
                          <label className="text-xs font-black uppercase tracking-widest text-white/95 block">Are you Part of Tamil Pasanga VTC? *</label>
                          <span className="text-[10px] text-brand-gray-600 font-bold uppercase tracking-wider block mt-1">Select one of the options below</span>
                        </div>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, isVTCMember: true }))}
                            className={`px-6 py-2 font-black uppercase text-xs tracking-wider rounded-sm italic transition-all border ${
                              formData.isVTCMember === true
                                ? 'bg-racing-red border-racing-red text-white shadow-lg shadow-racing-red/10 scale-105'
                                : 'bg-brand-black border-white/5 text-brand-gray-600 hover:border-white/25'
                            }`}
                          >
                            YES
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, isVTCMember: false }))}
                            className={`px-6 py-2 font-black uppercase text-xs tracking-wider rounded-sm italic transition-all border ${
                              formData.isVTCMember === false
                                ? 'bg-racing-red border-racing-red text-white shadow-lg shadow-racing-red/10 scale-105'
                                : 'bg-brand-black border-white/5 text-brand-gray-600 hover:border-white/25'
                            }`}
                          >
                            NO
                          </button>
                        </div>
                      </div>

                      {/* Other VTC Member Yes/No Options */}
                      <div className="bg-brand-black p-5 border border-white/5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-racing-red/20 transition-all mt-4">
                        <div>
                          <label className="text-xs font-black uppercase tracking-widest text-white/95 block">Are you part of any other VTC other than Tamil Pasanga VTC? *</label>
                          <span className="text-[10px] text-brand-gray-600 font-bold uppercase tracking-wider block mt-1">Select one of the options below</span>
                        </div>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, isOtherVTCMember: true }))}
                            className={`px-6 py-2 font-black uppercase text-xs tracking-wider rounded-sm italic transition-all border ${
                              formData.isOtherVTCMember === true
                                ? 'bg-racing-red border-racing-red text-white shadow-lg shadow-racing-red/10 scale-105'
                                : 'bg-brand-black border-white/5 text-brand-gray-600 hover:border-white/25'
                            }`}
                          >
                            YES
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, isOtherVTCMember: false }))}
                            className={`px-6 py-2 font-black uppercase text-xs tracking-wider rounded-sm italic transition-all border ${
                              formData.isOtherVTCMember === false
                                ? 'bg-racing-red border-racing-red text-white shadow-lg shadow-racing-red/10 scale-105'
                                : 'bg-brand-black border-white/5 text-brand-gray-600 hover:border-white/25'
                            }`}
                          >
                            NO
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    /* STEP 2: CREATIVE PORTFOLIO & TRUCKERSMP */
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-white/5 pb-4 mb-6 flex items-center gap-2">
                        <FolderOpen size={18} className="text-racing-red" />
                        <h4 className="font-black text-sm uppercase tracking-wider text-white">Work Showcase & Profiles</h4>
                      </div>

                      {/* Google Drive Link */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">Previous Works (Google Drive link) *</label>
                        <input 
                          type="text" 
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleTextChange}
                          placeholder="e.g. https://drive.google.com/drive/folders/..." 
                          className="bg-brand-black border border-white/5 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-racing-red transition-colors w-full font-semibold"
                        />
                        <p className="text-[9px] font-bold text-brand-gray-655 uppercase tracking-wider">A Google Drive or file folder link showing your virtual photography or video edits.</p>
                        {errors.portfolio && <span className="text-racing-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10} /> {errors.portfolio}</span>}
                      </div>

                      {/* TruckersMP Profile Link */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">TruckersMP Profile Link *</label>
                        <input 
                          type="text" 
                          name="truckersmp"
                          value={formData.truckersmp}
                          onChange={handleTextChange}
                          placeholder="e.g. https://truckersmp.com/user/73933" 
                          className="bg-brand-black border border-white/5 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-racing-red transition-colors w-full font-semibold"
                        />
                        {errors.truckersmp && <span className="text-racing-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10} /> {errors.truckersmp}</span>}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    /* STEP 3: AGREEMENTS & NOTES */
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-white/5 pb-4 mb-6 flex items-center gap-2">
                        <Sparkles size={18} className="text-racing-red" />
                        <h4 className="font-black text-sm uppercase tracking-wider text-white">Terms Agreement</h4>
                      </div>

                      {/* Motivation / Extra Notes */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">Why do you want to join Tamil Pasanga Media? (Optional)</label>
                        <textarea 
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleTextChange}
                          rows={4}
                          placeholder="Add any extra details, experiences, or a friendly note here..."
                          className="bg-brand-black border border-white/5 p-4 rounded-sm text-white focus:outline-none focus:border-racing-red transition-colors w-full font-semibold resize-none"
                        />
                      </div>

                      {/* Scrollable Terms & Conditions Box */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray-600">📋 Media Team Rules & Terms</label>
                        <div className="bg-brand-black border border-white/5 p-5 rounded-sm max-h-56 overflow-y-auto space-y-4 font-semibold text-xs text-brand-gray-600 leading-relaxed scrollbar-thin scrollbar-thumb-racing-red scrollbar-track-brand-black no-scrollbar">
                          <h5 className="text-white font-black uppercase tracking-wider text-xs border-b border-white/5 pb-2">1️⃣ Final Decision Authority</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li><strong className="text-white">Chain of Command:</strong> All final decisions regarding media approval, event coverage, team selections, and rule changes will be made exclusively by the <span className="text-racing-red font-bold">Media Manager, Media Project Lead, or the Founder</span>. Their decision is final.</li>
                          </ul>

                          <h5 className="text-white font-black uppercase tracking-wider text-xs border-b border-white/5 pb-2 pt-2">2️⃣ Photo, Screenshot & Event Rules</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li><strong className="text-white">Watermarks:</strong> Photos or screenshots taken during our official events/convoys <span className="text-white">must include the official community watermark</span> if shared publicly.</li>
                            <li><strong className="text-white">Personal Credit:</strong> You are welcome to add your own name or signature tag to your edits.</li>
                            <li><strong className="text-white">Portfolios:</strong> You are free to use your own creations in personal portfolios or social media reels.</li>
                            <li><strong className="text-white">Public Convoys:</strong> All communication and asset sharing for external public convoys <span className="text-white">must go through official channels. No personal DMs.</span></li>
                          </ul>

                          <h5 className="text-white font-black uppercase tracking-wider text-xs border-b border-white/5 pb-2 pt-2">3️⃣ Branding & Content Guidelines</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li><strong className="text-white">Official Assets:</strong> Always use the approved community logos, colors, and fonts for official graphics.</li>
                            <li><strong className="text-white">Keep it Clean:</strong> No media asset should contain toxic, offensive, or rule-breaking content.</li>
                            <li><strong className="text-white">Accuracy:</strong> Double-check event dates, times, and partner logos before posting publicly.</li>
                          </ul>

                          <h5 className="text-white font-black uppercase tracking-wider text-xs border-b border-white/5 pb-2 pt-2">4️⃣ Team Expectations & Communication</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li><strong className="text-white">Official Channels Only:</strong> Keep all work discussions and asset delivery in designated server channels. Do not take work-related coordination to private DMs.</li>
                            <li><strong className="text-white">Confidentiality:</strong> Do not leak unreleased designs, upcoming event plans, or internal announcements.</li>
                            <li><strong className="text-white">Deadlines:</strong> Deliver tasks on time. Communicate any delays early so we can help.</li>
                          </ul>

                          <h5 className="text-white font-black uppercase tracking-wider text-xs border-b border-white/5 pb-2 pt-2">5️⃣ External Media Team Commitment</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li><strong className="text-white">Applicant Agreement:</strong> By accepting these terms or submitting your application, you confirm that you are ready to formally join us as part of our <span className="text-racing-red font-bold">External Media Team</span>, agreeing to follow all rules and standards listed above.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Agree to Terms (Yes/No) */}
                      <div className="bg-brand-black p-5 border border-white/5 rounded-sm flex flex-col gap-4 hover:border-racing-red/20 transition-all">
                        <div className="flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleCheckboxChange}
                            className="w-5 h-5 accent-racing-red cursor-pointer mt-0.5"
                          />
                          <label htmlFor="agreeTerms" className="text-xs font-black uppercase tracking-widest text-white/95 cursor-pointer select-none leading-relaxed">
                            Do you agree to the official terms and conditions of Tamil Pasanga Media? *
                          </label>
                        </div>
                        <p className="text-[9px] text-brand-gray-600 font-bold uppercase tracking-wider pl-8">
                          By checking the box above, you agree to respect community rules, deliver original works, and collaborate professionally with our media staff.
                        </p>
                        {errors.agreeTerms && <span className="text-racing-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 pl-8"><AlertCircle size={10} /> {errors.agreeTerms}</span>}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && submitResult?.success && (
                    /* STEP 4: SUCCESS COMPONENT */
                    <motion.div
                      key="step4-success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-6"
                    >
                      <div className="w-20 h-20 bg-racing-red/10 border-2 border-racing-red rounded-full flex items-center justify-center mx-auto text-racing-red shadow-lg shadow-racing-red/10 animate-bounce">
                        <Check size={36} />
                      </div>
                      
                      <h3 className="text-3xl font-black uppercase tracking-tighter italic text-white">APPLICATION FILED!</h3>
                      
                      <p className="text-brand-gray-600 font-medium text-sm leading-relaxed max-w-md mx-auto">
                        Your recruitment request has been formatted and successfully sent directly to the Tamil Pasanga VTC recruitment log.
                      </p>

                      <div className="pt-6">
                        <button
                          type="button"
                          onClick={() => {
                            setIsApplying(false);
                            setCurrentStep(1);
                            setSubmitResult(null);
                            setFormData({
                              name: '',
                              discordTag: '',
                              isVTCMember: false,
                              age: '',
                              portfolio: '',
                              truckersmp: '',
                              agreeTerms: false,
                              motivation: ''
                            });
                          }}
                          className="btn-primary"
                        >
                          RETURN TO PORTAL
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Controls */}
                {currentStep < 4 && (
                  <div className="flex justify-between items-center border-t border-white/5 pt-8 mt-10">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="btn-outline px-6 py-2.5 flex items-center gap-2 text-xs"
                      >
                        <ArrowLeft size={14} /> BACK
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary px-8 py-2.5 flex items-center gap-2 text-xs"
                      >
                        NEXT <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-primary px-10 py-3 flex items-center justify-center gap-3 text-xs italic tracking-tighter disabled:opacity-50"
                      >
                        {isSubmitting ? 'SENDING...' : 'SUBMIT APPLICATION'} <Send size={14} />
                      </button>
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Recruitment;
