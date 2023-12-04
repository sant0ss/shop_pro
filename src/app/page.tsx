"use client";
import React, { useState } from 'react'; 

import Image from 'next/image';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Call from './sections/Call';
import Products from './sections/Products';



export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState("BRL");

  const handleCurrencyChange = (newCurrency: string) => {
    setSelectedCurrency(newCurrency);
  };

  return (
    <main>
      <Header selectedCurrency={selectedCurrency} onCurrencyChange={handleCurrencyChange} />
      <Call />
      <Products selectedCurrency={selectedCurrency} />
      <Footer />
    </main>
  );
}

