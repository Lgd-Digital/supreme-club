'use client';

import { Shield, Clock, MapPin, Headphones, Car, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Cobertura completa contra roubo, furto e danos ao seu veículo com tranquilidade garantida.',
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
      title: 'Carro Reserva',
      description: 'Veículo substituto disponível enquanto o seu está em manutenção ou reparo.',
    },
    {
      icon: Award,
      title: 'Sem Franquia',
      description: 'Economize mais com planos sem franquia e sem custos extras em sinistros.',
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
              className="glass-card border-2 border-white/10 hover:border-electric-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
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

        <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 border-2 border-electric-500/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-electric-500 mb-2">5k+</div>
              <div className="text-muted-foreground">Clientes Protegidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-electric-500 mb-2">99%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-electric-500 mb-2">24h</div>
              <div className="text-muted-foreground">Tempo de Resposta</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-electric-500 mb-2">15+</div>
              <div className="text-muted-foreground">Anos de Mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
