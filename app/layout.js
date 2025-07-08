import MainHeader from '../components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'NextJS Book Sharing Project',
  description: 'Another NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
