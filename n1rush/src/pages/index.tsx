import Banner from '../components/Banner';
import Shelf from '../components/Shelf';
import Select from 'react-select';

import styles from '../styles/home.module.scss';


export default function Home() {
  const options = [
    { value: 'MMO', label: 'MMO' },
    { value: 'Race', label: 'Race' },
    { value: 'Fight', label: 'Fight' },
    { value: 'Sci-fi', label: 'Sci-fi' },
  ]

  return (
    <div className={styles.homeWrapper}>
      {/* tipar dentro do banner e fazer o .map lá, aqui eu vou passar o objeto com os dados pra ele */}
      <section>
        <Banner /> 
      </section>

      <section className={`container ${styles.middleBannerContainer}`}>
        {/* aqui fazer a mesma coisa que fiz com o banner, criar componente tipar, e aqui só envio nas props as infos como obj */}
        <div className={styles.middleBannerWrapper}>
          <img src="/zelda_banner.png" alt="Zelda"/>
          <div>
            <p>The Legend of Zelda: Breath of the wild</p>
            <span />
          </div>
        </div>

        <div className={styles.middleBannerWrapper}>
          <img src="/sekiro_banner.png" alt="Sekiro"/>
          <div>
            <p>SEKIRO - Shadows Die Twice</p>
            <span />
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="sectionTitle">Produtos em destaque</h2>
        <Shelf />
      </section>

      <section className={`container ${styles.gameTipsContainer}`}>
        <div className={styles.selectWrapper}>
          <h2 className="sectionTitle">Dicas de games</h2>
          <Select placeholder="Selecione a categoria" className={styles.selectField} options={options} />
        </div>

        <div className={styles.gamesWrapper}>
          <ul>
            <li>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/crossout_game_tips.png" alt="Outriders" />
                  <div>
                    <span>1</span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/crossout_game_tips.png" alt="Outriders" />
                  <div>
                    <span>2</span> 
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/crossout_game_tips.png" alt="Outriders" />
                  <div>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="/crossout_game_tips.png" alt="Outriders" />
                  <div>
                    <span>4</span> 
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>

)
}