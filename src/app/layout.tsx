import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { LANG_COOKIE } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZENTRA – தமிழ் மற்றும் இந்திய குறுந்திரைப்படங்கள் | உங்கள் குறுந்திரைப்படத்தை வெளியிடுங்கள்',
  description: 'தமிழ் மற்றும் இந்திய குறுந்திரைப்படங்களுக்கான தளம். தமிழ்நாடு மற்றும் இந்தியா முழுவதும் குறுந்திரைப்படங்களை பாருங்கள் மற்றும் வெளியிடுங்கள்.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get(LANG_COOKIE)?.value;
  const initialLang: Lang = langCookie === 'en' || langCookie === 'ta' ? langCookie : 'ta';

  return (
    <html lang={initialLang === 'ta' ? 'ta' : 'en'} className={`${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-zentra-bg text-zentra-text">
        <LanguageProvider initialLang={initialLang}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
