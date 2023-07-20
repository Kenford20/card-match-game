'use client'

import { useState } from "react";
import CardGameBoard from "./board";
import CardInput from "./card-input";

interface CardMatchProps {

}

const CardMatchPage: React.FC<CardMatchProps> = (props:CardMatchProps) => {
  const [numCards, setNumCards] = useState(0);
  const [cards, setCards] = useState([]);

  return (
    <body>
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