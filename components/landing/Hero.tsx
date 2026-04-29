'use client';

import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export const handleWhatsApp = () => {
  window.open('https://wa.me/5585991817786', '_blank');
};

export default function Hero() {
  const benefits = [
    'Assistência 24h',
    'Roubo e furto',
    'Cobertura nacional',
    'Atendimento rápido',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-right lg:object-center opacity-80 dark:opacity-70"
          priority
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent dark:from-black"></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYTBlNiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
          

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight mb-6">
              Proteção Veicular <br />
              <span className="my-4 bg-gradient-to-r from-electric-500 via-electric-600 to-navy-600 dark:from-electric-400 dark:via-electric-300 dark:to-electric-500 bg-clip-text text-transparent">
                Acessível
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl">
              Tenha tranquilidade total com cobertura completa contra roubo, furto e assistências 24 horas.
              Proteção nacional com atendimento rápido e prático.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-3 glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-electric-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-electric-500 dark:text-electric-400" />
                  </div>
                  <span className="text-foreground dark:text-white font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('#cotacao')}
                size="lg"
                className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white font-semibold px-8 py-6 text-lg shadow-2xl hover:shadow-electric-500/50 transition-all duration-300 group"
              >
                Fazer Cotação
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="glass-card border-border dark:border-white/20 hover:border-electric-500/50 text-foreground dark:text-white font-semibold px-8 py-6 text-lg group"
              >
                <FaWhatsapp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="hidden lg:block h-full">
            {/* Right column empty to show background image */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
