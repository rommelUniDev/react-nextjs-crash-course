import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Life Portfolio',
  description: 'Next.js Crash Course App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="life-portfolio-app">
            <h1>Strategic Life Portfolio</h1>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
