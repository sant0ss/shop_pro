import React, { useState } from 'react'; 
import Navbar from "../componets/Navbar";
import classNames from 'classnames';
import { BiSearchAlt } from "react-icons/bi";

interface HeaderProps {
  selectedCurrency: string; 
  onCurrencyChange: (newCurrency: string) => void;
}

export default function Header({ selectedCurrency, onCurrencyChange }: HeaderProps) {
  const [clicked, setClicked] = useState(false);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value;
    onCurrencyChange(newCurrency);
  };
  return (
    <div>
      <div className="bg-white flex text-zinc-900 md:px-40 px-10 py-6 justify-between">
        <h2 className="font-bold text-lg mt-1 tracking-wider">{selectedCurrency}</h2>
        <form className="font-secondary flex flex-shrink w-200 px-2 max-w-lg mx-auto justify-center">
          <select className="py-2 px-2 hover:bg-palette-dark text-zinc-800 text-sm rounded-l-lg border focus:outline-none">
            <option>Categorias</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Infatil</option>
          </select>
          <input
            className="px-4 text-sm border border-r-0 border-l-0 border-palette-light w-2/3 focus:outline-none"
            type="text"
            required
            placeholder="Procurar um produto"
          />
          <button
            type="submit"
            className={classNames(clicked ? 'pointer-events-none opacity-75' : '', `py-2 px-4 bg-blue-600 hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-palette-primary`
            )}
          >
            <BiSearchAlt />
          </button>
        </form>
        <div className="flex">
          <select
            onChange={handleCurrencyChange}
            value={selectedCurrency}
            className="border-neutral-400 text-center text-xs p-1 rounded-lg focus:outline-none"
          >
            <option>BRL</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
      <div className="bg-white text-zinc-900 md:px-40 px-10 py-6 ">
        <Navbar />
      </div>
    </div>
  );
}
