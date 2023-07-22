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
    <div
      onClick={() => handleCardClick(cardIndex, cardNumber)}
      className={"card cursor-pointer px-10 py-16 text-3xl min-w-full h-40 inline-flex justify-center items-center" + `${(cardState === 'revealed' || cardState === 'matched') ? '  visible' : ''}`}
    >
      <div className="card-face card-back">
        <Image
          src="/next.svg"
          alt="Next Logo"
          className='card-back dark:invert'
          width={50}
          height={24}
          priority
        />
      </div>
      <div className="card-face card-front">
        <span>{`${cardNumber}`}</span>
      </div>
    </div>
  )
}

export default GameCard;