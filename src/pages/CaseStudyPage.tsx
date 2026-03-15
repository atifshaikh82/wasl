import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioProjects } from '../data/portfolio';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Target, Trophy } from 'lucide-react';

export const CaseStudyPage = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-[#8cc63f] hover:underline">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#8cc63f] transition-colors mb-12"
        >
          {isArabic ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
          {isArabic ? 'العودة إلى الأعمال' : 'Back to Portfolio'}
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#8cc63f]/20 text-[#8cc63f] text-sm font-medium border border-[#8cc63f]/20">
                {isArabic ? project.categoryAr : project.category}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10">
                {isArabic ? project.industryAr : project.industry}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              {isArabic ? project.titleAr : project.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {isArabic ? project.descriptionAr : project.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10"
          >
            <img 
              src={project.image} 
              alt={isArabic ? project.titleAr : project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-500 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{isArabic ? 'التحدي' : 'The Challenge'}</h3>
            <p className="text-gray-400 leading-relaxed">
              {isArabic ? project.challengeAr : project.challenge}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#8cc63f]/10 border border-[#8cc63f]/20"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{isArabic ? 'الحل' : 'The Solution'}</h3>
            <p className="text-gray-300 leading-relaxed">
              {isArabic ? project.solutionAr : project.solution}
            </p>
          </motion.div>
        </div>

        {/* Results & Tech Stack */}
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#8cc63f]" />
              {isArabic ? 'النتائج' : 'Key Results'}
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-4xl font-display font-bold text-[#8cc63f] mb-2">{result.value}</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                    {isArabic ? result.labelAr : result.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-[#8cc63f]" />
              {isArabic ? 'التقنيات' : 'Tech Stack'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
