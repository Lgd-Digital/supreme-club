'use client';

import { Shield, Clock, MapPin, Headphones, Car, Smartphone, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { handleWhatsApp } from './Hero';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Cobertura completa contra roubo, furto, colisão, danos a terceiros ao seu veículo com tranquilidade garantida.',
    },
    {
      icon: Clock,
      title: 'Assistência 24h',
      description: 'Atendimento disponível a qualquer hora do dia ou da noite, todos os dias da semana.',
    },
    {
      icon: MapPin,
      title: 'Cobertura Nacional',
      description: 'Proteção válida em todo território brasileiro, onde quer que você esteja.',
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado',
      description: 'Equipe especializada pronta para te atender e resolver qualquer situação rapidamente.',
    },
    {
      icon: Car,
      title: 'Veículo Reserva',
      description: 'Veículo substituto disponível enquanto o seu está em manutenção ou reparo.',
    },
    {
      icon: Smartphone,
      title: 'Aplicativo Android e IOS',
      description: 'App completo intuitivo para IOS e Android, com todas as funcionalidades na palma da sua mão',
    },
  ];

  return (
    <section id="beneficios" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher o{' '}
            <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
              Supreme?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos para garantir a melhor proteção para seu veículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="glass-card border-2 border-border dark:border-white/10 hover:border-electric-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-500 to-navy-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500/20 to-navy-600/20 flex items-center justify-center border border-electric-500/20 group-hover:border-electric-500/50 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-electric-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-electric-500 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 relative glass-card rounded-[2rem] overflow-hidden py-16 px-8 md:py-24 md:px-12 border-2 border-electric-500/20">
          <div className="relative z-20 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossa História em Números</h2>
            <div className="w-24 h-1.5 bg-electric-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça o impacto da Supreme Clube através dos nossos resultados e compromisso com cada associado.
            </p>
          </div>

          <div className="relative z-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-secondary/20 backdrop-blur-xl border border-border dark:border-white/5 rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-secondary/30 hover:border-electric-500/30 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-electric-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-electric-500/20">
                <Users className="w-7 h-7 text-electric-500" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight">25.000+</div>
              <div className="text-muted-foreground font-semibold text-lg">Associados Protegidos</div>
            </div>

            {/* Card 2 */}
            <div className="group bg-secondary/20 backdrop-blur-xl border border-border dark:border-white/5 rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-secondary/30 hover:border-electric-500/30 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-electric-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-electric-500/20">
                <TrendingUp className="w-7 h-7 text-electric-500" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight">5.000+</div>
              <div className="text-muted-foreground font-semibold text-lg">Sinistros Atendidos</div>
            </div>

            {/* Card 3 */}
            <div className="group bg-secondary/20 backdrop-blur-xl border border-border dark:border-white/5 rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-secondary/30 hover:border-electric-500/30 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-electric-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-electric-500/20">
                <Headphones className="w-7 h-7 text-electric-500" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight">24h</div>
              <div className="text-muted-foreground font-semibold text-lg">Suporte</div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white font-bold px-12 py-8 text-xl shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.6)] transition-all duration-500 hover:-translate-y-1 rounded-2xl group"
            >
              <FaWhatsapp className="mr-3 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
              Fazer Minha Cotação Grátis
            </Button>
        </div>
      </div>
    </section>
  );
}
