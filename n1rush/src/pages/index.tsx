import Banner from '../components/Banner';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Banner />
      <div className={`container ${styles.middleBannerContainer}`}>

        <div className={styles.middleBannerWrapper}>
          <img src="/zelda_banner.png" alt="Zelda"/>
        </div>

        <div className={styles.middleBannerWrapper}>
          <img src="/mortal-kombat.jfif" alt="Sekiro"/>
        </div>

      </div>
    </>

)
}