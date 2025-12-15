import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <RootProvider
            search={{
              SearchDialog,
            }}
        >{children}</RootProvider>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="8d395f4f-83ba-4bb3-b1d4-b532b314f1ba"></script>
      </body>
    </html>
  );
}
