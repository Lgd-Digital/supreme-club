'use client';

import { CircleHelp as HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FAQ() {
  const faqs = [
    {
      question: 'O que é proteção veicular?',
      answer: 'Proteção veicular é uma alternativa ao seguro tradicional, oferecida por associações ou cooperativas. Funciona através do rateio de custos entre os associados, proporcionando cobertura contra roubo, furto, colisão e assistência 24h com valores mais acessíveis.',
    },
    {
      question: 'Qual a diferença entre proteção veicular e seguro auto?',
      answer: 'A principal diferença está na estrutura: enquanto o seguro é regulado pela SUSEP e oferecido por seguradoras, a proteção veicular é baseada em associações. A proteção veicular geralmente tem custos menores, processos mais simples e não possui franquia em muitos planos.',
    },
    {
      question: 'Como funciona o atendimento em caso de sinistro?',
      answer: 'Em caso de sinistro, você entra em contato com nossa central 24h. Nossa equipe irá orientar sobre os procedimentos, enviar assistência se necessário e acompanhar todo o processo até a resolução. O atendimento é rápido e humanizado.',
    },
    {
      question: 'A cobertura é válida em todo o Brasil?',
      answer: 'Sim! Nossa cobertura é nacional, válida em todos os estados brasileiros. Você pode viajar com tranquilidade sabendo que terá assistência onde estiver.',
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim, não há período de carência para cancelamento. Você pode solicitar o cancelamento a qualquer momento sem multas ou taxas. Valorizamos a transparência e a liberdade dos nossos associados.',
    },
    {
      question: 'Como é feito o pagamento?',
      answer: 'O pagamento é mensal e pode ser feito através de boleto bancário. Você escolhe a melhor forma de acordo com sua preferência.',
    },
    {
      question: 'Existe carência para utilizar a proteção?',
      answer: 'Para a maioria das coberturas, há uma carência de 30 dias. Em casos de colisão, a carência é de 90 dias. Para assistência 24h e guincho, o serviço está disponível imediatamente após a contratação.',
    },
    {
      question: 'O que está incluído na assistência 24h?',
      answer: 'A assistência 24h inclui: guincho, socorro mecânico e elétrico, chaveiro, troca de pneus, pane seca (combustível), reboque e, em alguns planos, carro reserva. Todos os serviços estão disponíveis 24 horas por dia, 7 dias por semana.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-navy-600 mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre proteção veicular
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border-2 border-border dark:border-white/10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border dark:border-white/10 rounded-xl px-6 hover:border-electric-500/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-electric-500 transition-colors py-5">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center glass-card rounded-2xl p-8 border-2 border-border dark:border-electric-500/20">
          <h3 className="text-2xl font-bold mb-3">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está pronta para te ajudar. Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <FaWhatsapp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
            <a
              href="tel:+551140004000"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg glass border border-electric-500/30 hover:border-electric-500/50 text-foreground font-semibold transition-all duration-300"
            >
              (11) 4000-4000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
