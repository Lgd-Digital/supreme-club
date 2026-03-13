'use client';

import { Calculator, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { handleWhatsApp } from './Hero';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Calculator,
      title: 'Faça sua Cotação',
      description: 'Preencha o formulário online com os dados do seu veículo. Processo rápido e sem complicação.',
      color: 'from-electric-500 to-electric-600',
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Escolha seu Plano',
      description: 'Receba propostas personalizadas e escolha o plano que melhor se adequa às suas necessidades.',
      color: 'from-navy-600 to-navy-700',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Proteção Ativa',
      description: 'Pronto! Seu veículo está protegido. Aproveite a tranquilidade de dirigir com segurança total.',
      color: 'from-electric-600 to-navy-600',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como{' '}
            <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
              Funciona?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples, você contrata sua proteção veicular
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="glass-card border-2 border-border dark:border-white/10 hover:border-electric-500/30 transition-all duration-300 h-full group hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-electric-500/20 to-navy-600/20 border-2 border-electric-500/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-electric-500">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-electric-500/20 border-2 border-electric-500/50 flex items-center justify-center animate-pulse">
                    <ArrowRight className="w-4 h-4 text-electric-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto border-2 border-border dark:border-electric-500/20">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-muted-foreground mb-6">
              O processo completo leva menos de 5 minutos e você pode fazer tudo online, sem sair de casa!
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-500 mb-1">5min</div>
                <div className="text-sm text-muted-foreground">Tempo médio</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-500 mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Online</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-500 mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Ativação</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button
          onClick={handleWhatsApp}
          className="bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaWhatsapp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Fazer Cotação
        </Button>
        </div>
      </div>
    </section>
  );
}
