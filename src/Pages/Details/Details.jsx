import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../Components/Layout/NavBar/NavBar";
import styles from "./Details.module.css";
import Footer from "../../Components/Layout/Footer/Footer";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const [pokeDetails, setPokeDetails] = useState(null);

  const getPokemonDetails = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      console.log(response);

      setPokeDetails(response.data);
    } catch (error) {
      console.log("Erro ao carregar os dados", error);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <div className={styles.container_details}>
      <NavBar />

      <div className={styles.details_card}>
        {pokeDetails ? (
          <div className={styles.container_card}>
            <div className={styles.card_img}>
              <img
                src={pokeDetails.sprites.front_default}
                alt="Imagem do Pokémon"
              />
              <img
                src={pokeDetails.sprites.front_shiny}
                alt="Imagem do Pokémon"
              />
            </div>

            <div className={styles.titles}>
              <h2 className={styles.title_card}>
                <span>Name:</span>
                {pokeDetails.name}
              </h2>
              <hr />
              <p>
                <span>Tipo:</span>
                {pokeDetails.types.map((type) => type.type.name).join(", ")}
              </p>
              <hr />
              <p>
                <span>Peso:</span>
                {pokeDetails.weight} kg
              </p>
              <hr />
              <p>
                <span>Altura:</span> {pokeDetails.height / 10} metros
              </p>
              <hr />
              <div className={styles.action}>
                <h3>
                  <span>Ataque em batalhas:</span>
                </h3>
                <div className={styles.moves}>
                {pokeDetails.moves.slice(0, 5).map((move, key) => (
                  <li key={key}>{move.move.name}</li>
                ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Details;
