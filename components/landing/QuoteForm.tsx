'use client';

import { useState } from 'react';
import { Calculator, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    marca: '',
    ano: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Cotação enviada com sucesso! Entraremos em contato em breve.');
      setLoading(false);
      setFormData({ nome: '', telefone: '', email: '', marca: '', ano: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="cotacao" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-navy-600 mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Faça Sua{' '}
            <span className="bg-gradient-to-r from-electric-500 to-navy-600 bg-clip-text text-transparent">
              Cotação Online
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e receba sua cotação personalizada em minutos
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-2 border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Dados para Cotação</CardTitle>
              <CardDescription>
                Todas as informações são confidenciais e seguras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="marca">Marca do Veículo</Label>
                    <Input
                      id="marca"
                      name="marca"
                      placeholder="Ex: Toyota, Honda, Fiat"
                      value={formData.marca}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ano">Ano do Veículo</Label>
                    <Input
                      id="ano"
                      name="ano"
                      type="number"
                      placeholder="Ex: 2020"
                      value={formData.ano}
                      onChange={handleChange}
                      required
                      min="1990"
                      max={new Date().getFullYear() + 1}
                      className="h-12"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-gradient-to-r from-electric-500 to-navy-600 hover:from-electric-600 hover:to-navy-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      Solicitar Cotação
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-500 mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-500 mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Digital</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-500 mb-1">0%</div>
              <div className="text-sm text-muted-foreground">Burocracia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
