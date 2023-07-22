import Image from 'next/image'

interface GameCardProps {
  cardIndex: number
  cardNumber: number|String
  cardState: String
  handleCardClick: Function
}

const GameCard: React.FC<GameCardProps> = (props:GameCardProps) => {
  const { cardIndex, cardNumber, cardState, handleCardClick } = props;

  return (
    <>
      <span
        onClick={() => handleCardClick(cardIndex, cardNumber)}
        className="card cursor-pointer border border-sky-500 rounded-md px-10 py-16 text-3xl bg-black min-w-full h-40 inline-flex justify-center items-center"
      >
        <span className={"text-white" + ' ' + `${(cardState === 'revealed' || cardState === 'matched') ? '' : 'hidden'}`}>{`${cardNumber}`}</span>
        <Image
          src="/next.svg"
          alt="Next Logo"
          className={'dark:invert' + ' ' + `${(cardState === 'revealed' || cardState === 'matched') ? 'hidden' : ''}`}
          width={50}
          height={24}
          priority
        />
      </span>
    </>
  )
}

export default GameCard;