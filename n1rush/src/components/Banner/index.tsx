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
            <div className={styles.slideImage} style={{background: "url('./mortal-kombat.jfif')"}}>
              <div className="container">
                <div className={styles.overlayMobile}>
                  <h2>Mortal Kombat</h2>
                  <h4>R$ 299 <span>,99</span></h4>
                  <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova.
                    Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a
                    estratégia como o estilo de luta.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className={styles.slideImage} style={{background: "url('./rdr2.jfif')"}}>
              <div className="container">
                <div className={styles.overlayMobile}>
                  <h2>Red Dead Redemption 2</h2>
                  <h4>R$ 299 <span>,99</span></h4>
                  <p>Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar
                    Games. É o terceiro título da série Red Dead e uma prequela de Red Dead Redemption.
                  </p>
                </div>
              </div>
            </div>
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