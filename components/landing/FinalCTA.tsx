'use client';

import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-100 via-electric-50/50 to-navy-200 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800"></div>

      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-electric-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-600 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYTBlNiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-electric-500 to-navy-600 mb-8 animate-pulse">
          <Shield className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6 leading-tight">
          Proteja Seu Veículo
          <span className="block mt-2 bg-gradient-to-r from-electric-500 via-electric-600 to-navy-600 dark:from-electric-400 dark:via-electric-300 dark:to-electric-500 bg-clip-text text-transparent">
            Agora Mesmo
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Faça parte de milhares de brasileiros que já protegem seus veículos com tranquilidade e economia.
          A contratação é 100% online e leva apenas 5 minutos.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('#cotacao')}
            size="lg"
            className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-600 hover:to-electric-700 text-white font-semibold px-12 py-8 text-xl shadow-2xl hover:shadow-electric-500/50 transition-all duration-300 group rounded-xl"
          >
            Fazer Cotação Grátis
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold text-electric-500 dark:text-electric-400 mb-2">R$ 100</div>
            <div className="text-foreground dark:text-white text-sm">Planos a partir de</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold text-electric-500 dark:text-electric-400 mb-2">24h</div>
            <div className="text-foreground dark:text-white text-sm">Assistência disponível</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl font-bold text-electric-500 dark:text-electric-400 mb-2">100%</div>
            <div className="text-foreground dark:text-white text-sm">Processo online</div>
          </div>
        </div>

        <p className="mt-12 text-muted-foreground dark:text-gray-400 text-sm">
          Sem burocracia • Sem franquia • Cancelamento livre
        </p>
      </div>
    </section>
  );
}
