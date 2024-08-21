import React, { useEffect, useState } from 'react'
import styles from './PokemonDetail.module.css'
import type { PokemonDetailType } from '@/types/pokemon';

const PokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailType>();

  useEffect(() => {
  }, []);
  return(
    <div className={styles.content}>
    <div className={styles.inner}>
      <button type='button' className={styles.backButton}>Back</button>
      <div className={styles.box}>
        <img className={styles.image} src={pokemonDetail?.sprites.front_default} alt={pokemonDetail?.name} />
        <p className={styles.text}>
          <span>Name: {pokemonDetail?.name}</span>
          <span>Type: fire / flying</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default PokemonDetail
