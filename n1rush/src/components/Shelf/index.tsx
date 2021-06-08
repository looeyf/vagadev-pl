import { useState, useEffect } from 'react';
import ImgCrop from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext  } from 'pure-react-carousel';
import { useMediaQuery } from "react-responsive";

import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './styles.module.scss'

export default function Shelf() {
  const [slideCount, setSlideCount] = useState(3)
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)", });
  const isTablet = useMediaQuery({ query: "(min-device-width: 600px)", });

  useEffect(() => {
    setSlideCount(isDesktop ? 3 : isTablet ? 2 : 1);
  }, [isDesktop, isTablet])

  return (
    <CarouselProvider
      visibleSlides={slideCount}
      totalSlides={4}
      naturalSlideWidth={350}
      naturalSlideHeight={602}

      infinite
    >
      <div className={styles.shelfCarouselWrapper}>
        <Slider>
          <Slide index={0}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <ImgCrop
                    width={350}
                    height={362}
                    src={"/outriders_shelf.png"}
                    alt={"Outriders"}
                    objectFit="cover"
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>Outriders</h3>
                  <p>R$ 200,00</p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </Slide>

          <Slide index={1}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <ImgCrop
                    width={350}
                    height={362}
                    src={"/cyberpunk_shelf.png"}
                    alt={"Cyberpunk 2077"}
                    objectFit="cover"
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>Cyberpunk 2077</h3>
                  <p>R$ 200,00</p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </Slide>

          <Slide index={2}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <ImgCrop
                    width={350}
                    height={362}
                    src={"/donkeykong_shelf.png"}
                    alt={"Donkey Kong Country Tropical Freeze"}
                    objectFit="cover"
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>Donkey kong country tropical freeze</h3>
                  <p>R$ 200,00</p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </Slide>

          <Slide index={3}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <ImgCrop
                    width={350}
                    height={362}
                    src={"/donkeykong_shelf.png"}
                    alt={"Donkey Kong Country Tropical Freeze"}
                    objectFit="cover"
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>Donkey kong country tropical freeze</h3>
                  <p>R$ 200,00</p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </Slide>
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