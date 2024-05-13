import s from './Card.module.scss';
import noImage from './../../assets/images/no-image.png';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  path: string;
  type: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ title, path, type, id }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/item/${type}/${id}`)
  }
  
  return (
    <div className={s.card} onClick={handleClick}>
      <img src={path !== null ? `https://image.tmdb.org/t/p/w500/${path}` : noImage} className={s.card__image} alt="Slika" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
