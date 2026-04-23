"use client";

import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contato"
      className="relative bg-navy-950 text-white pt-20 pb-8 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <Image
                src="/logo-supreme.png"
                alt="Supreme Clube de Benefícios"
                width={140}
                height={40}
                className="h-24 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Proteção veicular moderna, acessível e confiável para todo o
              Brasil.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-electric-500/20 border border-white/10 hover:border-electric-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://instagram.com/supreme.protecao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-electric-500/20 border border-white/10 hover:border-electric-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-electric-500/20 border border-white/10 hover:border-electric-500/50 flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              {["Home", "Benefícios", "Sobre", "Depoimentos", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          `#${item
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")}`,
                        )
                      }
                      className="text-gray-400 hover:text-electric-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Proteção Total</li>
              <li>Assistência 24h</li>
              <li>Carro Reserva</li>
              <li>Guincho</li>
              <li>Socorro Mecânico</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-electric-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400">Telefone</div>
                  <a
                    href="tel:+5585991817786"
                    className="hover:text-electric-400 transition-colors"
                  >
                    (85) 99181-7786
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-electric-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400">E-mail</div>
                  <a
                    href="mailto:contato@supreme.com.br"
                    className="hover:text-electric-400 transition-colors"
                  >
                    contato@supreme.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-electric-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400">Endereço</div>
                  <div>Rua José Hipólito 550 sala 41</div>
                  <div>Fortaleza - CE</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Supreme Clube de Benefícios. Todos os
              direitos reservados.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-electric-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-electric-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
