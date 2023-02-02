import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
         <a href="https://github.com/gabiediasalves"><FaGithub/></a> 
        </li>
        <li>
          <a href="https://www.instagram.com/gabiediasalves/"><FaInstagram/></a>
        </li>
        <li>
         <a href="https://www.linkedin.com/in/gabrieli-dias-alves-769b7121a/"><FaLinkedin/></a>
        </li>
      </ul>
      <p className={styles.copy_right}>Costs &copy;gabiediasalves - 2023</p>
    </footer>
  )
}

export default Footer