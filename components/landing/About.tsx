'use client';

import { CircleCheck as CheckCircle2, Target, Users, TrendingUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { handleWhatsApp } from './Hero';
import { Button } from '../ui/button';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Proteger seu patrimônio com excelência e compromisso',
    },
    {
      icon: Users,
      title: 'Valores',
      description: 'Transparência, confiança e atendimento humanizado',
    },
    {
      icon: TrendingUp,
      title: 'Visão',
      description: 'Ser referência em proteção veicular no Brasil',
    },
  ];

  const features = [
    'Processos 100% digitais e sem burocracia',
    'Atendimento personalizado e humanizado',
    'Parcerias com oficinas credenciadas',
    'Tecnologia de ponta em gestão de sinistros',
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-semibold">
                Sobre o Supreme
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proteção Veicular com{' '}
              <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
                Tecnologia e Confiança
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Supreme Clube de Benefícios nasceu com o propósito de revolucionar o mercado de
              proteção veicular, oferecendo soluções modernas, acessíveis e totalmente digitais.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com mais de 15 anos de experiência, atendemos milhares de clientes em todo o Brasil,
              sempre com foco em excelência no atendimento e na proteção do seu patrimônio.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-500/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-electric-500" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="glass-card rounded-2xl p-6 h-48 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-navy-600 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Missão</h3>
                  <p className="text-sm text-muted-foreground">Proteger seu patrimônio com excelência</p>
                </div>

                <div className="glass-card rounded-2xl p-8 aspect-square bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-electric-400 mb-2">15+</div>
                    <div className="text-white text-sm">Anos de Mercado</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="glass-card rounded-2xl p-8 aspect-square bg-gradient-to-br from-electric-500 to-electric-600 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">5k+</div>
                    <div className="text-white text-sm">Clientes Ativos</div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 h-48 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-navy-600 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Visão</h3>
                  <p className="text-sm text-muted-foreground">Ser referência nacional</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        <Button
          onClick={handleWhatsApp}
          className="bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaWhatsapp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Fazer Cotação
        </Button>
      </div>
    </section>
  );
}
