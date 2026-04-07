/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Lightbulb,
  LayoutGrid,
  List as ListIcon,
  Image as ImageIcon,
  CheckCircle2,
  HelpCircle,
  Binary,
  Info,
  Database
} from 'lucide-react';
import { SLIDES, Slide } from './constants';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderSlideContent = (slide: Slide) => {
    const Icon = slide.icon || Info;

    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-brand-primary/10 rounded-full"
            >
              <Icon size={80} className="text-brand-primary" />
            </motion.div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl text-slate-900 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium">
                {slide.content}
              </p>
            </div>
            {slide.image && (
              <motion.img
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                src={slide.image}
                alt={slide.title}
                className="w-full max-w-2xl h-64 object-cover rounded-2xl shadow-2xl mt-8"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        );

      case 'grid':
        return (
          <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center gap-4">
              <Icon size={40} className="text-brand-secondary" />
              <h2 className="text-4xl text-slate-900">{slide.title}</h2>
            </div>
            <p className="text-xl text-slate-600">{slide.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {slide.highlights?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary font-bold text-xl">
                    {idx + 1}
                  </div>
                  <span className="text-xl font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center gap-4">
              <Icon size={40} className="text-brand-accent" />
              <h2 className="text-4xl text-slate-900">{slide.title}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 items-center">
              <div className="space-y-6">
                <p className="text-2xl text-slate-700 leading-relaxed">
                  {slide.content}
                </p>
                <div className="space-y-4">
                  {slide.highlights?.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.2 }}
                      className={`p-4 rounded-xl font-medium text-lg ${
                        item.startsWith('Плюсы') 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                          : 'bg-rose-50 text-rose-700 border border-rose-100'
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              {slide.image && (
                <div className="relative">
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                    <Icon size={32} className="text-brand-accent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'list':
        return (
          <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center gap-4">
              <Icon size={40} className="text-brand-primary" />
              <h2 className="text-4xl text-slate-900">{slide.title}</h2>
            </div>
            <p className="text-2xl text-slate-600">{slide.content}</p>
            <div className="space-y-4 flex-1">
              {slide.highlights?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
                >
                  <CheckCircle2 className="text-brand-primary shrink-0" size={28} />
                  <span className="text-2xl text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'final':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="p-8 bg-emerald-100 rounded-full"
            >
              <Icon size={100} className="text-emerald-600" />
            </motion.div>
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-5xl md:text-6xl text-slate-900">
                {slide.title}
              </h2>
              <p className="text-2xl md:text-3xl text-slate-600 font-medium leading-relaxed">
                {slide.content}
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center gap-4">
              <Icon size={40} className="text-brand-primary" />
              <h2 className="text-4xl text-slate-900">{slide.title}</h2>
            </div>
            <div className="space-y-6">
              {Array.isArray(slide.content) ? (
                slide.content.map((p, i) => (
                  <p key={i} className="text-2xl text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-2xl text-slate-700 leading-relaxed">
                  {slide.content}
                </p>
              )}
              {slide.highlights && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {slide.highlights.map((h, i) => (
                    <span key={i} className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full text-lg font-semibold">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
            <Database size={18} />
          </div>
          <span className="font-display font-bold text-slate-800 hidden sm:block">
            Цифровые носители
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              showExplanation 
                ? 'bg-brand-primary text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Lightbulb size={18} />
            <span className="text-sm font-semibold hidden md:block">
              {showExplanation ? 'Скрыть пояснение' : 'Пояснение для учителя'}
            </span>
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
            title="Во весь экран (F)"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </header>

      <main className="flex-1 relative flex overflow-hidden">
        {/* Slide Area */}
        <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full max-w-6xl mx-auto"
            >
              {renderSlideContent(currentSlide)}
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200">
            <motion.div 
              className="h-full bg-brand-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlideIndex + 1) / SLIDES.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Explanation Sidebar */}
        <AnimatePresence>
          {showExplanation && (
            <motion.aside
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="w-80 bg-white border-l border-slate-200 p-8 shadow-2xl z-20 overflow-y-auto"
            >
              <div className="flex items-center gap-3 mb-6 text-brand-primary">
                <BookOpen size={24} />
                <h3 className="text-xl font-bold">Методические заметки</h3>
              </div>
              <div className="prose prose-slate">
                <p className="text-slate-600 leading-relaxed italic">
                  {currentSlide.explanation || "Нет дополнительных пояснений для этого слайда."}
                </p>
                <div className="mt-8 p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                  <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">
                    Совет
                  </h4>
                  <p className="text-sm text-slate-600">
                    Используйте стрелки на клавиатуре или пробел для переключения слайдов.
                  </p>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <footer className="h-20 bg-white border-t border-slate-200 px-6 flex items-center justify-between z-10">
        <div className="text-sm font-medium text-slate-400">
          Слайд {currentSlideIndex + 1} из {SLIDES.length}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-1">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlideIndex 
                    ? 'w-6 bg-brand-primary' 
                    : 'bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="p-3 rounded-full bg-brand-primary text-white hover:bg-brand-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-primary/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="hidden md:block">
          <span className="text-xs text-slate-400 font-mono">
            KIMI Presentation Engine v1.0
          </span>
        </div>
      </footer>
    </div>
  );
}
