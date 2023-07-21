import Image from 'next/image'
import { useEffect, useState, useRef } from 'react';

interface CardGameBoardProps {
  setNumCards: Function
  cards: (String | number)[][]
}

const CardGameBoard: React.FC<CardGameBoardProps> = (props:CardGameBoardProps) => {
  const { setNumCards, cards } = props;
  const [board, setBoard] = useState(cards);
  console.log(board)
  const [revealedCards, setRevealedCards] = useState<[number, number|String][]>([]);
  let isBusy = useRef(false);

  const handleCardClick = (setBoard:Function, cardIndex:number, number:String|number) => {
    console.log('reveal', revealedCards)
    if (isBusy.current) return;
    if (board[cardIndex][1] === 'matched') return;
    setBoard(board.map((card, i) => i === cardIndex ? [card[0], 'revealed'] : card));
    setRevealedCards([...revealedCards, [cardIndex, number]]);
  }
  
  useEffect(() => {
    if (revealedCards.length < 2) return;
    let [firstIndex, first] = revealedCards[revealedCards.length-1];
    let [secondIndex, second] = revealedCards[revealedCards.length-2];
    if (revealedCards.length > 0 && revealedCards.length % 2 === 0) {
      isBusy.current = true;
      if (first == second) {
        console.log(first)
        console.log(second)
        setBoard(oldBoard => oldBoard.map((card, i) => (i === firstIndex || i === secondIndex) ? [card[0], 'matched'] : card));
      } else {
        console.log('no match?')
        setTimeout(() => {
          setBoard(oldBoard => oldBoard.map((card, i) => (i === firstIndex || i === secondIndex) ? [card[0], 'hidden'] : card));
          isBusy.current = false;
        }, 3000)
      }
    }
  }, [revealedCards]);

  useEffect(() => {
    if (board.every(card => card[1] === 'matched')) {
      // dispatch usecontext/usereducer action to show modal on root page
      window.alert('you win woo');
    }
  }, [board]);

  return (
    <div id="card-game-board" className="flex flex-col justify-center items-center h-screen py-20">
      <div className="grid gap-4 grid-cols-4">
        {board.map(([number, cardState], i) =>
          <span
            onClick={() => handleCardClick(setBoard, i, number)}
            className="card cursor-pointer border border-sky-500 rounded-md px-10 py-16 text-3xl bg-black min-w-full h-40 inline-flex justify-center items-center"
            key={i}
          >
            <span className={"text-white" + ' ' + `${(cardState === 'revealed' || cardState === 'matched') ? '' : 'hidden'}`}>{`${number}`}</span>
            <Image
              src="/next.svg"
              alt="Next Logo"
              className={'dark:invert' + ' ' + `${(cardState === 'revealed' || cardState === 'matched') ? 'hidden' : ''}`}
              width={50}
              height={24}
              priority
            />
          </span>
        )}
      </div>
      <button onClick={() => setNumCards(0)} className="border-2 border-purple-600 px-5 py-3 mt-5">RESTART</button>
    </div>
  )
}

export default CardGameBoard;