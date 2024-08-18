import { AppConfig } from '@/app.config';
import Footer from '@/app/components/layout/footer';
import Header from '@/app/components/layout/header';
import { NotoSansJp } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${AppConfig.title}`,
    default: AppConfig.title,
  },
  description: AppConfig.description,
  metadataBase: new URL(AppConfig.baseUrl),
  verification: {
    google: 'WrixKoEfjuRBMfWSj8SGE01gpJ-zxESUvUHqkqWYn3E',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={cn(NotoSansJp.className, 'min-h-dvh flex flex-col bg-muted/10')}>
        <Header />
        <main className='container flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
