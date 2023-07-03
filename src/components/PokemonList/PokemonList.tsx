import React from 'react'
import styles from './PokemonList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem'
import { PokemonListType } from '@/types/pokemon'



const PokemonList = () => {

  return (
    <ul className={styles.list}>
      <PokemonItem />
  </ul>
  )
}

export default PokemonList