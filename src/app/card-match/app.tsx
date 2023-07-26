'use client'

import { useState } from "react";
import { useTheme } from "./contexts/theme-context";
import CardInput from "./card-input";
import CardGameBoard from "./board";
import { useModal, useToggleModal } from "./contexts/modal-context";

interface CardMatchProps {

}

const CardMatchPage: React.FC<CardMatchProps> = (props:CardMatchProps) => {
  const [numCards, setNumCards] = useState(0);
  const [cards, setCards] = useState([]);
  const theme = useTheme();
  const isModalOpen = useModal();
  console.log(theme)
  console.log('isModalOpen', isModalOpen)

  return (
    <body className={`transition-colors ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-900'}`}>
      <div id="victory-modal" className={`z-10 fixed flex justify-center items-center w-screen h-screen ${isModalOpen ? '' : 'hidden'}`}>
        <div onClick={useToggleModal()} className="w-screen h-screen fixed bg-slate-400/50"></div>
        <div className="flex flex-col justify-center items-center relative w-64 h-48 bg-pink-400 text-white rounded-md">
          You Win!!!
          <span onClick={useToggleModal()} className="z-20 absolute top-2 right-4 text-xl cursor-pointer text-black font-mono">x</span>
          <button onClick={() => setNumCards(0)} className="px-3 py-2 mt-4 bg-white text-black">Click to Restart</button>
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