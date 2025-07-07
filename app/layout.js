import './globals.css'

export const metadata = {
  title: 'NextJS Book Sharing Project',
  description: 'Another NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
