'use client'

import { useState } from "react";
import { useTheme } from "./contexts/theme-context";
import CardInput from "./card-input";
import CardGameBoard from "./board";

interface CardMatchProps {

}

const CardMatchPage: React.FC<CardMatchProps> = (props:CardMatchProps) => {
  const [numCards, setNumCards] = useState(0);
  const [cards, setCards] = useState([]);
  const theme = useTheme();
  console.log(theme)

  return (
    <body className={`transition-colors ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-900'}`}>
      <div id="victory-modal" className="hidden flex justify-center items-center w-screen h-screen fixed bg-slate-400/50">
        <div className="flex flex-col justify-center items-center relative w-64 h-48 bg-pink-400 text-white rounded-md">
          You Win!!!
          <span className="absolute top-2 right-4 text-xl cursor-pointer text-black font-mono">x</span>
          <button className="px-3 py-2 mt-4 bg-white text-black">Click to Restart</button>
        </div>
      </div>
      {
        numCards === 0 &&
        <>
          <h1>Card Matching Game Wooo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita consequuntur odio esse natus illum cupiditate voluptates optio? Quibusdam expedita facilis, reprehenderit fugit consectetur sunt id dicta magnam porro ex.</p>
          <CardInput setNumCards={setNumCards} setCards={setCards} />
        </>
      }
      {numCards > 0 && <CardGameBoard setNumCards={setNumCards} cards={cards} />}
    </body>
  )
}

export default CardMatchPage;