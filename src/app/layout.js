import "./globals.css";
import  Header  from "../../components/Header/Header";
import Footer from "../../components/footer";
import YandexMetrika from "../../components/YandexMetrika/YandexMEtrika";
import localFont from "next/font/local";
import Bootstrap from "../../components/Bootstrap/Bootstrap";
import { brand, SITE_URL } from "../data/seoCities";


const montserratAlternates = localFont({
  src: [
    {
      path: './fonts/MontserratAlternates-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  category: "jobs",
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserratAlternates.className}`}>
            <Bootstrap />
            <Header />
            {children}
            <Footer/>
            <YandexMetrika/>
      </body>
    </html>
  );
}
