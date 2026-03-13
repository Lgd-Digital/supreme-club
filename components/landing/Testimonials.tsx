'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Eduardo Silva',
      role: 'Empresário',
      initials: 'CE',
      rating: 5,
      text: 'Excelente serviço! Quando precisei acionar a proteção por roubo, fui atendido rapidamente e todo o processo foi muito transparente. Recomendo de olhos fechados!',
    },
    {
      name: 'Marina Santos',
      role: 'Arquiteta',
      initials: 'MS',
      rating: 5,
      text: 'A melhor decisão que tomei foi contratar o Supreme. O atendimento é impecável e os valores são justos. Me sinto muito mais segura dirigindo pela cidade.',
    },
    {
      name: 'Roberto Oliveira',
      role: 'Corretor',
      initials: 'RO',
      rating: 5,
      text: 'Proteção veicular de qualidade com preço acessível. Já indiquei para vários amigos e todos ficaram satisfeitos. A assistência 24h funciona de verdade!',
    },
    {
      name: 'Ana Paula Costa',
      role: 'Médica',
      initials: 'AC',
      rating: 5,
      text: 'Profissionalismo e eficiência definem o Supreme. Quando meu carro apresentou problemas na estrada, recebi assistência imediata. Equipe nota 10!',
    },
    {
      name: 'Fernando Almeida',
      role: 'Engenheiro',
      initials: 'FA',
      rating: 5,
      text: 'Depois de comparar várias opções, escolhi o Supreme e não me arrependo. O processo de contratação foi rápido e simples, tudo online.',
    },
    {
      name: 'Juliana Rodrigues',
      role: 'Designer',
      initials: 'JR',
      rating: 5,
      text: 'Adorei a transparência e o suporte oferecido. Sempre que tenho dúvidas, sou atendida rapidamente. Vale muito a pena pela tranquilidade que proporciona!',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos{' '}
            <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de quem confia no Supreme para proteger seu veículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card border-2 border-white/10 hover:border-electric-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-electric-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-electric-500 to-navy-600 text-white font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-electric-500/30" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-electric-500 text-electric-500" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 glass-card rounded-full px-8 py-4 border-2 border-electric-500/20">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 fill-electric-500 text-electric-500" />
              <span className="text-2xl font-bold">4.9</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-muted-foreground">
              Baseado em <span className="font-bold text-foreground">500+</span> avaliações
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
