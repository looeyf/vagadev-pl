import { HiMenuAlt2, HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMdPaperPlane } from 'react-icons/io';

import styles from './styles.module.scss';


export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <HiMenuAlt2 />
      <img src="/logo.png" alt="N1 Rush" />

      <IoMdPaperPlane style={{ marginLeft: 'auto' }} />
      <span>Contato</span>

      <HiOutlineSearch className={styles.searchIcon} />
      <span>Buscar</span>

      <HiOutlineShoppingBag />
      <div>2</div>
    </header>
  )
}