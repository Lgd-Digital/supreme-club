'use client';

import { Check, Car, Bike, Shield, Plus, Gift, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { handleWhatsApp } from './Hero';

const plansData = {
  carros: [
    {
      name: 'Plano Prata',
      icon: '🥈',
      color: 'from-[#708090] to-[#C0C0C0]',
      border: 'border-[#C0C0C0]/20',
      text: 'text-[#C0C0C0]',
      sections: [
        {
          title: 'Coberturas',
          items: ['Roubo', 'Furto', 'Colisão', 'Perda Total', 'Incendio Pós Colisão'],
        },
        {
          title: 'Benefícios',
          items: [
            'Central de Monitoramento',
            'Reboque Ilimitado (roubo ou furto)',
            'Terceiros 20 mil',
            'Coberturas de Vidro 50% - Farois, Lanternas e Retrovisores',
            'Veículo Reserva 07 Dias',
            'Reboque 300 KM',
          ],
        },
        {
          title: 'Bônus',
          items: ['Rastreador', 'Anti-Furto', 'Central 24H', 'Monitoramento em Tempo Real Via App', 'Cerca Virtual'],
        },
      ],
    },
    {
      name: 'Plano Ouro',
      icon: '🥇',
      primary: true,
      color: 'from-[#B8860B] to-[#FFD700]',
      border: 'border-[#FFD700]/20',
      text: 'text-[#FFD700]',
      sections: [
        {
          title: 'Coberturas',
          items: ['Roubo', 'Furto', 'Colisão', 'Perda Total', 'Incendio Pós Colisão'],
        },
        {
          title: 'Benefícios',
          items: [
            'Central de Monitoramento',
            'Reboque Ilimitado (roubo ou furto)',
            'Terceiros 30 mil',
            'Coberturas de Vidro 70% - Farois, Lanternas e Retrovisores',
            'Chaveiro - 3x ao ano',
            'Veículo Reserva 15 Dias',
            'Taxi/uber (roubo ou furto)',
            'Reboque 600KM',
          ],
        },
        {
          title: 'Bônus',
          items: ['Rastreador', 'Anti-Furto', 'Central 24H', 'Monitoramento em Tempo Real Via App', 'Cerca Virtual'],
        },
      ],
    },
    {
      name: 'Plano Bronze',
      icon: '🥉',
      color: 'from-[#8B4513] to-[#CD7F32]',
      border: 'border-[#CD7F32]/20',
      text: 'text-[#CD7F32]',
      sections: [
        {
          title: 'Coberturas',
          items: ['Roubo', 'Furto'],
        },
        {
          title: 'Benefícios',
          items: ['Reboque Ilimitado - (roubo ou furto)', 'Central de Monitoramento'],
        },
        {
          title: 'Bônus',
          items: ['Rastreador', 'Anti-Furto', 'Central 24H', 'Monitoramento em Tempo Real Via App', 'Cerca Virtual'],
        },
      ],
    },
  ],
  motos: [
    {
      name: 'Plano Prata',
      icon: '🥈',
      color: 'from-[#708090] to-[#C0C0C0]',
      border: 'border-[#C0C0C0]/20',
      text: 'text-[#C0C0C0]',
      sections: [
        {
          title: 'Coberturas',
          items: ['Roubo', 'Furto', 'Colisão', 'Perda Total', 'Incendio Pós Colisão'],
        },
        {
          title: 'Benefícios',
          items: [
            'Central de Monitoramento',
            'Reboque Ilimitado - (roubo ou furto)',
            'Terceiros 10 mil',
            'Veículo Reserva 07 Dias',
            'Reboque 300 KM',
          ],
        },
        {
          title: 'Bônus',
          items: ['Rastreador', 'Anti-Furto', 'Central 24H', 'Monitoramento em Tempo Real Via App', 'Cerca Virtual'],
        },
      ],
    },
    {
      name: 'Plano Ouro',
      icon: '🥇',
      primary: true,
      color: 'from-[#B8860B] to-[#FFD700]',
      border: 'border-[#FFD700]/20',
      text: 'text-[#FFD700]',
      sections: [
        {
          title: 'Coberturas',
          items: ['Roubo', 'Furto', 'Colisão', 'Perda total', 'Incendio pós colisão'],
        },
        {
          title: 'Benefícios',
          items: [
            'Central de Monitoramento',
            'Reboque Ilimitado (roubo ou furto)',
            'Terceiros 15 mil',
            'Veículo Reserva 15 Dias',
            'Taxi/Uber - (roubo ou furto)',
            'Reboque 600 KM',
          ],
        },
        {
          title: 'Bônus',
          items: ['Rastreador', 'Anti-Furto', 'Central 24H', 'Monitoramento em Tempo Real Via App', 'Cerca Virtual'],
        },
      ],
    },
    {
      name: 'Plano Bronze',
      icon: '🥉',
      color: 'from-[#8B4513] to-[#CD7F32]',
      border: 'border-[#CD7F32]/20',
      text: 'text-[#CD7F32]',
      sections: [
        {
          title: 'Coberturas',
          items: ['Roubo', 'Furto'],
        },
        {
          title: 'Benefícios',
          items: ['Reboque Ilimitado - (roubo ou furto)', 'Central de Monitoramento'],
        },
        {
          title: 'Bônus',
          items: ['Rastreador', 'Anti-Furto', 'Central 24H', 'Monitoramento em Tempo Real Via App', 'Cerca Virtual'],
        },
      ],
    },
  ],
};

export default function Plans() {
  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha o Plano Ideal para o Seu{' '}
            <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
              Veículo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis e completos, desenhados para oferecer a máxima segurança para você e seu veículo.
          </p>
        </div>

        <Tabs defaultValue="carros" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 p-1 bg-secondary/50 backdrop-blur-md rounded-2xl border border-white/10 h-16">
              <TabsTrigger 
                value="carros" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-electric-500 data-[state=active]:to-navy-600 data-[state=active]:text-white transition-all duration-300 gap-2 h-full text-lg font-semibold"
              >
                <Car className="w-5 h-5" />
                Carros
              </TabsTrigger>
              <TabsTrigger 
                value="motos" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-electric-500 data-[state=active]:to-navy-600 data-[state=active]:text-white transition-all duration-300 gap-2 h-full text-lg font-semibold"
              >
                <Bike className="w-5 h-5" />
                Motos
              </TabsTrigger>
            </TabsList>
          </div>

          {(['carros', 'motos'] as const).map((type) => (
            <TabsContent key={type} value={type} className="mt-0 focus-visible:outline-none outline-none">
              <div className="grid lg:grid-cols-3 gap-8">
                {plansData[type].map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`relative flex flex-col h-full glass-card border-2 transition-all duration-500 group overflow-hidden hover:shadow-2xl hover:-translate-y-2 ${
                      plan.primary ? 'border-electric-500/50 scale-105 z-10' : 'border-border'
                    }`}
                  >
                    {plan.primary && (
                      <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-electric-500 to-navy-600 text-white text-center py-1.5 text-xs font-bold uppercase tracking-wider">
                        O Mais Recomendado
                      </div>
                    )}
                    
                    <CardHeader className={`pt-10 pb-8 text-center text-white bg-gradient-to-br ${plan.color}`}>
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{plan.icon}</div>
                      <CardTitle className="text-3xl font-extrabold tracking-tight">
                        {plan.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow p-8">
                      <div className="space-y-8">
                        {plan.sections.map((section, sIndex) => (
                          <div key={sIndex}>
                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                              {section.title === 'Coberturas' && <Shield className="w-4 h-4 text-electric-500" />}
                              {section.title === 'Benefícios' && <Plus className="w-4 h-4 text-electric-500" />}
                              {section.title === 'Bônus' && <Gift className="w-4 h-4 text-electric-500" />}
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.items.map((item, iIndex) => (
                                <li key={iIndex} className="flex items-start gap-3 group/item">
                                  <div className="mt-1 w-5 h-5 rounded-full bg-electric-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-electric-500/20 transition-colors">
                                    <Check className="w-3 h-3 text-electric-500" />
                                  </div>
                                  <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 mt-auto">
                      <Button 
                        onClick={handleWhatsApp}
                        className={`w-full py-8 text-lg font-bold rounded-2xl gap-3 transition-all duration-300 ${
                          plan.primary 
                            ? 'bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white shadow-lg shadow-electric-500/25 h-16' 
                            : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border h-16'
                        }`}
                      >
                        <FaWhatsapp className="w-6 h-6" />
                        Fale com Consultor
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            * Sujeito a análise cadastral e termos de uso.
          </p>
        </div>
      </div>
    </section>
  );
}
