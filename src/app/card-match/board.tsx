import { useEffect, useState, useRef } from 'react';
import GameCard from './card';

interface CardGameBoardProps {
  setNumCards: Function
  cards: [number, string][]
}

const CardGameBoard: React.FC<CardGameBoardProps> = (props:CardGameBoardProps) => {
  const { setNumCards, cards } = props;
  const [board, setBoard] = useState<[number, string][]>(cards);
  const [matchedCards, setMatchedCards] = useState<number>(0);

  let isBusy = useRef(false);
  let firstCard:any = useRef(null);
  let secondCard:any = useRef(null);
  
  const handleCardClick = (cardIndex:number, number:number) => {
    if (isBusy.current) return;
    if (board[cardIndex][1] === 'matched') return;
    setBoard(board.map((card, i) => i === cardIndex ? [card[0], 'revealed'] : card));
    
    if (firstCard.current === null) firstCard.current = [cardIndex, number];
    else secondCard.current = [cardIndex, number];
  }

  useEffect(() => {
    if (firstCard.current === null || secondCard.current === null) return;

    let [firstIndex, first] = firstCard.current;
    let [secondIndex, second] = secondCard.current;

    if (first == second) {
      setMatchedCards(matchedCards + 2);
      setBoard(oldBoard => oldBoard.map((card, i) => (i === firstIndex || i === secondIndex) ? [card[0], 'matched'] : card));
    } else {
      isBusy.current = true;
      setTimeout(() => {
        setBoard(oldBoard => oldBoard.map((card, i) => (i === firstIndex || i === secondIndex) ? [card[0], 'hidden'] : card));
        isBusy.current = false;
      }, 2500)
    }
    firstCard.current = null;
    secondCard.current = null;

  }, [board, matchedCards]);

  useEffect(() => {
    if (matchedCards === board.length) {
      // dispatch usecontext/usereducer action to show modal on root page
      window.alert('you win woo');
    }
  }, [board, matchedCards]);

  return (
    <div id="card-game-board" className="flex flex-col justify-center items-center h-screen py-20">
      <div className="grid gap-4 grid-cols-4">
        {board.map(([number, cardState], i) =>
          <GameCard key={i} cardIndex={i} cardNumber={number} cardState={cardState} handleCardClick={handleCardClick}/>
        )}
      </div>
      <button onClick={() => setNumCards(0)} className="border-2 border-purple-600 px-5 py-3 mt-5">RESTART</button>
    </div>
  )
}

export default CardGameBoard;