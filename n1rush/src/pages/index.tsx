import { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';
import styles from '../styles/home.module.scss';

export default function Home() {
  const statusFormatter = (current, total) => {
    return `${current} / ${total}`
  };

  const renderArrowPrev = (clickHandler, hasPrev, label) => {
    return (
      <HiOutlineChevronLeft onClick={clickHandler} className={styles.previousArrow} />
    )
  };

  const renderArrowNext = (clickHandler, hasPrev, label) => {
    return (
      <HiOutlineChevronRight onClick={clickHandler} className={styles.nextArrow} />
    )
  };

  const [currentCarouselGame, setCurrentCarouselGame] = useState('Mortal Kombat'); // QUando chamar a API ja setar o valor com o primeiro item
  const onChange = (index, {props}) => {
    const game = props.children.props.alt;
    setCurrentCarouselGame(game);
  };

  const carouselSettings = {
    showThumbs: false,
    showIndicators: false,
    infiniteLoop: true,
    statusFormatter,
    showArrows: false,
    renderArrowPrev,
    renderArrowNext,
    onChange,
  };

  return (
    <div className={styles.carouselWrapper}>
      
      {/* transportar o carousel para um componente, menos o controller pq será diferente na outra section */}
      <Carousel className={styles.carousel} {...carouselSettings}>  
        <div>
            <img src="/mortal-kombat.jfif" alt="Mortal Kombat" />
        </div>
        <div>
            <img src="/rdr2.jfif" alt="Red Dead Redemption 2" />
        </div>
      </Carousel>

      {/* Preciso ajustar as setas e o contador, está ruim, testar outro slider que tenha custom buttons */}
      <div className={styles.carouselController}>
        <p>{currentCarouselGame}</p> 
        <span />
      </div>
    </div>

  )
}