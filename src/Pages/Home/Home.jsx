import NavBar from "../../Components/Layout/NavBar/NavBar";
import styles from "./Home.module.css";
import Footer from "../../Components/Layout/Footer/Footer";
import { useState, useEffect } from "react";
import Pokeapi from "../../axios/Config";
import axios from "axios";
import Pokebola from "../../Img/09a6ae937a6d9ef5cd10d132b59d6f5d.png";
import { Link } from "react-router-dom";

function Home() {
  const [pokes, setPokes] = useState([]);

  const getPokemon = () => {
    try {
      var datas = [];
      for (var i = 1; i < 55; i++) {
        datas.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      // eslint-disable-next-line no-unused-vars
      const response = axios
        .all(datas.map((data) => axios.get(data)))
        .then((res) => setPokes(res));
    } catch (error) {
      console.log("Erro ao carregar a API", error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const typeColor = (type) => {
    switch (type) {
      case "grass":
        return "green";
      case "fire":
        return "red";
      case "water":
        return "blue";
      case "ground":
        return "brown";
      case "poison":
        return "purple";
      case "flying":
        return "orange";
      case "electric":
        return "pink";
      case "bug":
        return "pink";
      case "fairy":
        return "black";
      case "normal":
        return "beige";
      default:
        return;
    }
  };

  const getTypeStyle = (type) => {
    return {
      backgroundColor: typeColor(type),
      padding: "5px 5px",
      borderRadius: "4rem",
      color: "white",
    };
  };

  const typeHandler = (types) => {
    if (types.length > 1) {
      return (
        <p>
          <span style={getTypeStyle(types[0].type.name)}>
            {types[0].type.name}
          </span>{" "}
          <span style={getTypeStyle(types[1].type.name)}>
            {types[1].type.name}
          </span>
        </p>
      );
    } else {
      return (
        <p>
          <span style={getTypeStyle(types[0].type.name)}>
            {types[0].type.name}
          </span>
        </p>
      );
    }
  };

  const [searchPok, setSearchPok] = useState("");

  const filterpoker = () => {
    const res = pokes.filter((poke) =>
      poke.data.name.includes(searchPok.toLowerCase())
    );

    if (res.length > 0) {
      setPokes(res);
    } else {
      console.log("Pokemon não encontrado!");
    }
  };

  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode);
  };

  const backgroundColor = mode ? "black" : "white";

  return (
    <div style={{ backgroundColor }}>
      <NavBar />
      <h2 className={styles.title_home}>Procurar pokemon</h2>

      <div className={styles.container_switch}>
      <label className={styles.switch}>
        <div className={styles.switch_wrapper}>
          <input onClick={changeMode} type="checkbox" name="check" />
          <span className={styles.switch_button}></span>
        </div>
      </label>
      </div>
      
      <div className={styles.container_search}>
        <input
          className={styles.searchPok}
          type="text"
          value={searchPok}
          placeholder="Digite o nome do pokemon"
          onChange={(e) => setSearchPok(e.target.value)}
        />
        <div className={styles.btn}>
          {" "}
          <Link to="#" onClick={filterpoker}>
            {" "}
            <img src={Pokebola} alt="pokebola" />
          </Link>
        </div>
      </div>

      <div className={styles.cards}>
        {pokes.length === 0 ? (
          <p>Carregando dados...</p>
        ) : (
          pokes.map((poke, key) => (
            <div className={styles.container_card} key={key}>
              <div className={styles.card_img}>
                <img src={poke.data.sprites.front_default} alt="img-pokemon" />
                <div className={styles.titles}>
                  <h2 className={styles.title_card}>{poke.data.name}</h2>
                  <p className={styles.cardP} style={getTypeStyle(poke.types)}>
                    {typeHandler(poke.data.types)}
                  </p>
                </div>
              </div>
              <div className={styles.btn_link}>
                <Link to={`/details/${poke.data.id}`} className={styles.li}>
                  Detalhes
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
