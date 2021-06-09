import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import ImgCrop from 'next/image';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext  } from 'pure-react-carousel';
import { useMediaQuery } from "react-responsive";

import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './styles.module.scss'

type FeaturedGame = {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
}

type ShelfProps = {
  featuredGames: FeaturedGame[];
  totalSlides: number;
}

export default function Shelf({ featuredGames, totalSlides }: ShelfProps) {
  const [slideCount, setSlideCount] = useState(3)
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)", });
  const isTablet = useMediaQuery({ query: "(min-device-width: 600px)", });

  useEffect(() => {
    setSlideCount(isDesktop ? 3 : isTablet ? 2 : 1);
  }, [isDesktop, isTablet])

  return (
    <CarouselProvider
      visibleSlides={slideCount}
      totalSlides={totalSlides}
      naturalSlideWidth={350}
      naturalSlideHeight={602}

      infinite
    >
      <div className={styles.shelfCarouselWrapper}>
        <Slider>
          {featuredGames.map((game, index) => {
            return (
              <Slide key={game.id} index={index}>
                <div className={styles.item}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <ImgCrop
                        width={350}
                        height={362}
                        src={game.thumbnail}
                        alt={game.title}
                        objectFit="cover"
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <h3>{game.title}</h3>
                      <p>{game.price}</p>
                      <button>Comprar</button>
                    </div>
                  </div>
                </div>
              </Slide>
            )
          })}
        </Slider>

        <div className={styles.controls}>
          <ButtonBack className={styles.backButton}>
            <HiOutlineChevronLeft />
          </ButtonBack>
          <ButtonNext className={styles.nextButton}>
            <HiOutlineChevronRight />
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  )
}