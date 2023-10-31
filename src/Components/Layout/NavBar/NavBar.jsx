import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Pokemon from "../../../Img/pokemon-2048.png";
import Pokemon2 from "../../../Img/picachu_pok__mon-logo-D361BD95C6-seeklogo.com.png";

function NavBar() {
  return (
    <div className={styles.container_nav}>
      <div className={styles.colun}>
        <div className={styles.img_name}>
          <img className={styles.imgwidth} src={Pokemon} alt="name_pokemon" />
        </div>

        <div className={styles.img_pokemon}>
          <img src={Pokemon2} alt="pokemon" />
        </div>
      </div>

      <div className={styles.links}>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/details"}>Detalhes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
