import Banner from '../components/Banner';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Banner />
      <div className={`container ${styles.middleBannerContainer}`}>

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

      </div>
    </>

)
}