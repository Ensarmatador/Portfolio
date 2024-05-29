import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rtk Mash Portfolio',
  description: 'Hello, I am @rtk_mash, I have been on the path of becoming a developer for 1 years. I live in Yalova, Türkiye. ',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/attachments/1045035380572958888/1245396389324918878/a9005357c01c074b69a51659f943da77.jpg?ex=66589945&is=665747c5&hm=f05928e6fdd46358f6a0eacc3cd6b066e4c6e6f9568fb9d4c4196ded6adc5dac&',
  openGraph: {
    images: 'https://cdn.discordapp.com/attachments/1045035380572958888/1245396147338612866/standard.gif?ex=6658990b&is=6657478b&hm=1ce1cb593872c786171a12f56b1939354d8a642137549f58336addcb8d1c09e0&',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
