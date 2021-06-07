import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext  } from 'pure-react-carousel';
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi';

import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './styles.module.scss'

export default function Shelf() {
  const shelfCarouselSettings = {
    visibleSlides: 3,
    totalSlides: 4,
    naturalSlideWidth: 350,
    naturalSlideHeight: 602,
  };

  return (
    <CarouselProvider {...shelfCarouselSettings}>
      <div className={styles.shelfCarouselWrapper}>
        <Slider>
          <Slide index={0}>
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image hasMasterSpinner src="/outriders_shelf.png" alt="Outriders" />
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
                  <Image hasMasterSpinner src="/cyberpunk_shelf.png" alt="Cyberpunk 2077" />
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
                  <Image hasMasterSpinner src="/donkeykong_shelf.png" alt="Donkey Kong Country Tropical Freeze" />
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
                  <Image hasMasterSpinner src="/donkeykong_shelf.png" alt="Donkey Kong Country Tropical Freeze" />
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