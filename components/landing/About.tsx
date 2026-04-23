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
      description: 'Cuidar do que move a vida das pessoas, oferecendo proteção veicular justa, acessível e sem barreiras, para que cada associado siga seu caminho com mais segurança e liberdade.',
    },
    {
      icon: Users,
      title: 'Valores',
      description: 'Pessoas em primeiro lugar, União e força coletiva, Empatia com o associado, Compromisso real, Transparência sempre, Determinação em servir e Evolução contínua.',
    },
    {
      icon: TrendingUp,
      title: 'Visão',
      description: 'Ser a marca que devolve a liberdade de dirigir sem medo, tornando a proteção veicular simples, inclusiva e confiável para todos.',
    },
  ];

  const features = [
    'Processos 100% digitais e sem burocracia',
    'Atendimento personalizado e humanizado',
    'Parcerias com oficinas credenciadas',
    'Tecnologia de ponta em gestão de sinistros',
    'Sem consulta ao SPC/Serasa',
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-semibold">
                Sobre a Supreme
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proteção Veicular com{' '}
              <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
                Tecnologia e Confiança
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Supreme Clube de Benefícios nasceu com o propósito de revolucionar o mercado de
              proteção veicular, oferecendo soluções modernas, acessíveis e totalmente digitais.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com excelência, atendemos clientes em todo o Brasil, sempre com foco no atendimento e
              na proteção do seu patrimônio.
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
                  <p className="text-sm text-muted-foreground">Cuidar do que move a vida das pessoas, oferecendo proteção veicular justa, acessível e sem barreiras.</p>
                </div>

                <div className="glass-card rounded-2xl p-6 h-48 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-navy-600 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Visão</h3>
                  <p className="text-sm text-muted-foreground">Ser a marca que devolve a liberdade de dirigir sem medo, tornando a proteção simples e inclusiva.</p>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="glass-card rounded-2xl p-8 h-[calc(100%-3rem)] bg-gradient-to-br from-navy-700 to-navy-900 flex flex-col justify-center border border-white/5 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-navy-600 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-4">Valores</h3>
                  <ul className="space-y-3">
                    {[
                      'Pessoas em primeiro lugar',
                      'União e força coletiva',
                      'Empatia com o associado',
                      'Compromisso real',
                      'Transparência sempre',
                      'Determinação em servir',
                      'Evolução contínua',
                    ].map((valor) => (
                      <li key={valor} className="text-blue-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-400"></span>
                        {valor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white font-bold px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-xl"
        >
          <FaWhatsapp className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
          Fazer Minha Cotação
        </Button>
      </div>
    </section>
  );
}
