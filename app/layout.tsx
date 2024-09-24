import { Suspense } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import StoreProvider from './StoreProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Loading from '@components/common/Loading';
import LayoutState from '@components/layout/LayoutState';
import '@src/styles/globals.scss';

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Home'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AntdRegistry>
            <Suspense fallback={<Loading />}>
              <LayoutState>{children}</LayoutState>
            </Suspense>
          </AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
