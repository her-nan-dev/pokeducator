import React, { useState, useEffect, useContext } from "react";
import medalla1 from "../../assets/img/medalla1.png";
import medalla2 from "../../assets/img/medalla2.png";
import medalla3 from "../../assets/img/medalla3.png";
import fusion from "../../assets/img/fusion.png";
import { Context } from "../store/appContext.jsx";

function PokeducatorLandingPage() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.votes();
  }, []);

  return (
    <div className="container align-items-center maincontainer">
      <div className="">
        <div className="fondo mt-3 rounded text-center ">
          <div className=" margin1 mt-3 ">
            <p className="alert alert-warning w-75 text-center m-auto">
              Usando la máquina de fusión podrás conseguir Pokemons mejores y
              mas fuertes.
            </p>
          </div>
          <div>
            <div className="col-md-4 btn border-0 shadow-none mt-4">
              <a href="/fusion">
                <div className="pokeball pokeball-animated">
                  <h1 className="fusionButton mt-4">
                    <img src={fusion} alt="" className="fusionImg" />
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <div className="mb-3 me-2 text-end">
            <a href="/info">
              <button className="buttonPokemonInfo">Mas información...</button>
            </a>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <h2 className="d-flex justify-content-center pt-5 pb-3">Fusiones mas votadas</h2>
        <div className="col-sm-4">
          <div className="d-flex justify-content-center">
            {store.votes_pokemons[1] ? (
              <a href={`/fusion/${store.votes_pokemons[0]?.pokemon_id}`}>
                <img
                  className="rounded-circle d-flex align-items-center div_evolucion"
                  src={store.votes_pokemons[0]?.img}
                  alt="guardería Pokémon en Pokémon Negro y Blanco"
                />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="text-center podium2 divMedalla">
            <img src={medalla1} className="medalla2" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="d-flex justify-content-center">
            {store.votes_pokemons[1] ? (
              <a href={`/fusion/${store.votes_pokemons[1]?.pokemon_id}`}>
                <img
                  className="rounded-circle d-flex align-items-center div_evolucion"
                  src={store.votes_pokemons[1]?.img}
                  alt="guardería Pokémon en Pokémon Negro y Blanco"
                />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="text-center podium2 divMedalla">
            <img src={medalla2} className="medalla2" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="d-flex justify-content-center">
            {store.votes_pokemons[2] ? (
              <a href={`/fusion/${store.votes_pokemons[2]?.pokemon_id}`}>
                <img
                  className="rounded-circle d-flex align-items-center div_evolucion"
                  src={store.votes_pokemons[2]?.img}
                  alt="guardería Pokémon en Pokémon Negro y Blanco"
                />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="text-center podium2 divMedalla">
            <img src={medalla3} className="medalla2" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default PokeducatorLandingPage;
