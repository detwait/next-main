import RatingStar from "./rating-star";

export interface RatingProps {
  currentValue: number;
  maxValue: number;
}

const Rating: React.FC<RatingProps> = ({ currentValue, maxValue }) => {
  const stars = [];
  for (let i = 1; i <= maxValue; i++) { 
    stars.push(<RatingStar key={i} isFilled={ i <= currentValue} /> );
  } 

  return (
    <div className="flex items-center">
      { stars }
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{ currentValue.toFixed(2) }</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{maxValue}</p>
    </div>
  );
}

export default Rating;