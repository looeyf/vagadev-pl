import { useState } from "react";

import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './styles.module.scss';

import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';

export default function Banner() {
  const carouselSettings = {
    visibleSlides: 1,
    totalSlides: 2,
    naturalSlideWidth: 1920,
    naturalSlideHeight: 840,
  };

  const [currentCarouselGame, setCurrentCarouselGame] = useState('Mortal Kombat'); // QUando chamar a API ja setar o valor com o primeiro item

  return (
    <CarouselProvider {...carouselSettings}>
      <div className={styles.carouselWrapper}>
        <Slider>
          <Slide index={0}>
            <Image hasMasterSpinner src="./mortal-kombat.jfif" alt="Mortal Kombat" />
          </Slide>
          <Slide index={1}>
            <Image hasMasterSpinner src="./rdr2.jfif" alt="Red Dead Redemption 2" />
          </Slide>
        </Slider>

        <div className={styles.carouselControllerWrapper}>
          <div className={styles.title}>
            <p>{currentCarouselGame}</p> 
            <span />
          </div>

          <div className={styles.controls}>
            <p>1 / 2</p>
            <div>
              <ButtonBack>
                <HiOutlineChevronLeft />
              </ButtonBack>
              <ButtonNext>
                <HiOutlineChevronRight />
              </ButtonNext>
            </div>

          </div>
        </div>
      </div>
    </CarouselProvider>
)
}