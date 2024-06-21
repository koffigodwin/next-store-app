import React from 'react'
import './globals.css'
import { Metadata } from 'next';
import  Navbar  from '@/components/Navbar/Navbar';
import  Container  from '@/components/global/Container';
import {Inter} from 'next/font/google'
import Provider from './Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Store',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout ({children}:{children : React.ReactNode}) {

  
  return (
    <html lang='en' suppressHydrationWarning>
   <body className={inter.className}>
    <Provider>
   <Navbar />
   <Container className='py-20'>{children}</Container>
   </Provider>
   </body>
  </html>
  )
}