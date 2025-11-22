import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Atef Arman SHiSHiR | Full-stack Web Developer',
  description: 'Atef Arman Shishir is a self taught full-stack developer experienced in React.JS, Node.JS, Express.JS, MongoDB and Django Rest Framework.',
  icons: {
    icon: '/logoS.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
