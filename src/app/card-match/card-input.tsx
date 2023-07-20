import { FormEvent, useRef } from "react";

const NUMBER_LIMIT = 99;

const shuffle = (arr:Array<Array<Number|String>>) => {
  let currentIndex = arr.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

const createBoard = (numCards:number) => {
  const cards:[Number, String][] = [];
  for (let i = 0; i < numCards; i++) {
    let randomNumber = Math.floor(Math.random() * (NUMBER_LIMIT - 1 + 1) + 1);
    let cardState = 'hidden'
    cards.push([randomNumber, cardState], [randomNumber, cardState]);
  }
  return shuffle(cards);
}

interface CardInputProps {
  setNumCards: Function
  setCards: Function
}

const handleOnSubmit = (e: FormEvent<HTMLFormElement>, setNumCards:Function, setCards:Function, inputRef:any) => {
  e.preventDefault();
  setNumCards(inputRef.current);
  setCards(createBoard(inputRef.current));
}

const CardInput: React.FC<CardInputProps> = (props: CardInputProps) => {
  const { setNumCards, setCards } = props;
  let inputRef = useRef(0);
  return (
    <form onSubmit={e => handleOnSubmit(e, setNumCards, setCards, inputRef)}>
      <label htmlFor="card-input">Enter number of pairs to find</label>
      <input
        id="card-input"
        className="border-solid border-2 border-blue"
        placeholder="# of pairs"
        type="number"
        onChange={e => inputRef.current = parseInt(e.target.value)}
      ></input>
      <button className="border border-4 border-blue-300 hover:border-blue-400">Start Game</button>
    </form> 
  )
}

export default CardInput;