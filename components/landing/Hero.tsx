'use client';

import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

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

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 dark:from-navy-950 dark:via-black dark:to-navy-950"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-600 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYTBlNiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-semibold backdrop-blur-sm">
                Proteção Veicular Premium
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Proteção Veicular <br />
              <span className="my-4 bg-gradient-to-r from-electric-400 via-electric-300 to-electric-500 bg-clip-text text-transparent">
                Inteligente
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              Tenha tranquilidade total com cobertura completa contra roubo, furto e assistências 24 horas.
              Proteção nacional com atendimento rápido e eficiente.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-3 glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-electric-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-electric-400" />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <div className="glass-card p-6 rounded-2xl mb-8 inline-block">
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-2">Planos a partir de</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold text-white">R$</span>
                  <span className="text-6xl font-bold bg-gradient-to-r from-electric-400 to-electric-300 bg-clip-text text-transparent">100</span>
                  <span className="text-2xl text-gray-300">/mês</span>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
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
                className="glass-card border-white/20 hover:border-electric-400/50 text-white font-semibold px-8 py-6 text-lg group"
              >
                <FaWhatsapp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-500 to-navy-600 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative glass-card rounded-3xl p-8 space-y-6">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-500/20 to-navy-600/20 flex items-center justify-center border-4 border-electric-500/30">
                      <svg className="w-24 h-24 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Proteção Total</h3>
                    <p className="text-gray-300">Seu veículo sempre seguro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
