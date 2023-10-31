import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container_footer}>
      <h2>Contatos</h2>
      <p>&copy; Pokedex João Victor Ferreira 2023</p>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="https://www.instagram.com/">
              {" "}
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/">
              {" "}
              <FaLinkedin />
            </a>
            <a href="https://web.whatsapp.com/">
              {" "}
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
