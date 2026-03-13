import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supreme Clube de Benefícios - Proteção Veicular Inteligente',
  description: 'Proteção veicular completa com assistência 24h, cobertura nacional e planos a partir de R$ 100/mês. Contratação 100% online e sem burocracia.',
  openGraph: {
    images: [
      {
        url: '/favicon.png',
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
