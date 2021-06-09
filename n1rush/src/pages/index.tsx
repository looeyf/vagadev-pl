import { useState } from 'react';
import { GetServerSideProps } from 'next'

import ImgCrop from 'next/image';
import Shelf from '../components/Shelf';
import Banner from '../components/Banner';
import Select from 'react-select';

import { api, myApi } from '../services/api';

import { HiOutlineRefresh } from 'react-icons/hi';
import styles from '../styles/home.module.scss';

type GameTip = {
  id: number;
  title: string;
  thumbnail: string;
}

type FeaturedGame = {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
}

type HomeProps = {
  gameTips: GameTip[];
  featuredGames: FeaturedGame[];
  totalSlides: number;
}


export default function Home({ gameTips, featuredGames, totalSlides }: HomeProps) {
  const options = [
    { value: 'mmo', label: 'MMO' },
    { value: 'mmorpg', label: 'MMORPG' },
    { value: 'shooter', label: 'Shooter' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'racing', label: 'Racing' },
    { value: 'sports', label: 'Sports' },
    { value: 'fighting', label: 'Fighting' },
  ]

  const [gameTipList, setGameTipList] = useState(gameTips);
  const [isLoading, setIsLoading] = useState(false);
  async function handleSelectChange(genre: string) {
    setIsLoading(true);
    const { data } = await api.get('games', {
      params: {
        "platform": "pc",
        "category": genre,
        "sort-by": "release-date",
      }
    });

    const games = data.map(game => {
      return {
        id: game.id,
        title: game.title,
        thumbnail: game.thumbnail,
      }
    })

    const gameTips = games.slice(0, 4);
    setGameTipList(gameTips);
    setIsLoading(false);
  };

  return (
    <div className={styles.homeWrapper}>
      {/* tipar dentro do banner e fazer o .map lá, aqui eu vou passar o objeto com os dados pra ele */}
      <section>
        <Banner /> 
      </section>

      <section className={`container ${styles.middleBannerContainer}`}>
        <div className={styles.middleBannerWrapper}>
          <ImgCrop
            width={627}
            height={368}
            src={"/zelda_banner.png"}
            alt={"Zelda"}
            objectFit="cover"
          />
          <div className={styles.gameTitle}>
            <p>The Legend of Zelda: Breath of the wild</p>
            <span />
          </div>
        </div>

        <div className={styles.middleBannerWrapper}>
          <ImgCrop
            width={627}
            height={368}
            src={"/sekiro_banner.png"}
            alt={"SEKIRO - Shadows Die Twice"}
            objectFit="cover"
          />
          <div className={styles.gameTitle}>
            <p>SEKIRO - Shadows Die Twice</p>
            <span />
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="sectionTitle">Produtos em destaque</h2>
        <Shelf featuredGames={featuredGames} totalSlides={totalSlides} />
      </section>

      <section className={`container ${styles.gameTipsContainer}`}>
        <div className={styles.selectWrapper}>
          <h2 className="sectionTitle">Dicas de games</h2>
          <Select instanceId="gameCategory" placeholder="Selecione a categoria" className={styles.selectField} options={options} onChange={(e) => {handleSelectChange(e.value)}} />
          {isLoading ? <HiOutlineRefresh className={styles.spinner} /> : ''}
        </div>

        <div className={styles.gamesWrapper}>
          <ul>
            {gameTipList.map((game, index) => {
              return (
                <li key={game.id}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <ImgCrop
                      width={303}
                      height={174}
                      src={game.thumbnail}
                      alt={game.title}
                      objectFit="cover"
                    />
                    <div className={styles.tipNumber}>
                      <span>{ index + 1}</span> 
                    </div>
                  </div>
                </div>
              </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
)}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('games', {
    params: {
      "platform": "pc",
      "sort-by": "release-date",
    }
  });
  const games = data.map(game => {
    return {
      id: game.id,
      title: game.title,
      thumbnail: game.thumbnail,
    }
  })
  const gameTips = games.slice(0, 4);

  const shelf = await myApi.get('featuredGames', {
    params: {
      _limit: 10,
      _sort: "release_date",
    }
  });
  const featuredGames = shelf.data.map(game => {
    return {
      id: game.id,
      title: game.title,
      price: game.price,
      thumbnail: game.thumbnail,
    }
  })
  const totalSlides = featuredGames.length;

  return {
    props: {
      gameTips,
      featuredGames,
      totalSlides
    },
  }
}

