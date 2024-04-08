import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Pokemon App',
  description: 'Next.js Crash Course',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="pokemon-app">
            <h1>My Pokemon App</h1>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
