import { Inter, Josefin_Sans } from 'next/font/google';

// Display font — used for headings and hero title.
export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Body font — used for paragraphs, form fields and navigation.
// Josefin is a geometric display face and reads poorly at body sizes,
// so we pair it with Inter for long-form and UI text.
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
