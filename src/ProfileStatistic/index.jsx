import React from 'react';
import './style.scss';

export const ProfileStatistic = (match) => {
  const pokemonStatistic = match.pokemon;
  const allStats = pokemonStatistic.stats.map((stat) => stat.base_stat);
  const max = Math.max(...allStats);
  const color = '#ff3e4e';
  return (
    <>
      <div className="profile-statistic">
        <div className="profile-statistic__container">
          <div className="profile-statistic__wrapper">
            <p className="profile-statistic__name">{pokemonStatistic.name}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonStatistic.id}.svg`}
              className="profile-statistic__image"
              alt="pokemon-statistic"
            />
          </div>
          <div className="profile-statistic__info">
            <ul className="profile-statistic__description">
              <li className="profile-statistic__items">
                <span className="profile-statistic__property">HP</span>
                <div className="profile-statistic__value">
                  <div
                    className="profile-statistic__value--inner"
                    style={{
                      width: `${
                        (pokemonStatistic.stats[0].base_stat / max) * 100
                      }%`,
                      backgroundColor: `${color}`,
                    }}
                  >
                    <span className="profile-statistic__number">
                      {pokemonStatistic.stats[0].base_stat}
                    </span>
                  </div>
                </div>
              </li>
              <li className="profile-statistic__items">
                <span className="profile-statistic__property">Attack</span>
                <div className="profile-statistic__value">
                  <div
                    className="profile-statistic__value--inner"
                    style={{
                      width: `${
                        (pokemonStatistic.stats[1].base_stat / max) * 100
                      }%`,
                      backgroundColor: `${color}`,
                    }}
                  >
                    <span className="profile-statistic__number">
                      {pokemonStatistic.stats[1].base_stat}
                    </span>
                  </div>
                </div>
              </li>
              <li className="profile-statistic__items">
                <span className="profile-statistic__property">Defense</span>
                <div className="profile-statistic__value">
                  <div
                    className="profile-statistic__value--inner"
                    style={{
                      width: `${
                        (pokemonStatistic.stats[2].base_stat / max) * 100
                      }%`,
                      backgroundColor: `${color}`,
                    }}
                  >
                    <span className="profile-statistic__number">
                      {pokemonStatistic.stats[2].base_stat}
                    </span>
                  </div>
                </div>
              </li>
              <li className="profile-statistic__items">
                <span className="profile-statistic__property">Speed</span>
                <div className="profile-statistic__value">
                  <div
                    className="profile-statistic__value--inner"
                    style={{
                      width: `${
                        (pokemonStatistic.stats[3].base_stat / max) * 100
                      }%`,
                      backgroundColor: `${color}`,
                    }}
                  >
                    <span className="profile-statistic__number">
                      {pokemonStatistic.stats[3].base_stat}
                    </span>
                  </div>
                </div>
              </li>
              <li className="profile-statistic__items">
                <span className="profile-statistic__property">Sp Atk</span>
                <div className="profile-statistic__value">
                  <div
                    className="profile-statistic__value--inner"
                    style={{
                      width: `${
                        (pokemonStatistic.stats[4].base_stat / max) * 100
                      }%`,
                      backgroundColor: `${color}`,
                    }}
                  >
                    <span className="profile-statistic__number">
                      {pokemonStatistic.stats[4].base_stat}
                    </span>
                  </div>
                </div>
              </li>
              <li className="profile-statistic__items">
                <span className="profile-statistic__property">Sp Def</span>
                <div className="profile-statistic__value">
                  <div
                    className="profile-statistic__value--inner"
                    style={{
                      width: `${
                        (pokemonStatistic.stats[5].base_stat / max) * 100
                      }%`,
                      backgroundColor: `${color}`,
                    }}
                  >
                    <span className="profile-statistic__number">
                      {pokemonStatistic.stats[5].base_stat}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
