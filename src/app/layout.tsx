import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Torza - NFT Payment Infrastructure',
  description: 'Accept card payments for NFTs. No crypto knowledge required from your customers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, height: '100%' }}>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
