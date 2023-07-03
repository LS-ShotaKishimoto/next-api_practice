import React,{ useState, useEffect } from 'react'
import styles from './PokemonList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem'
import { PokemonListType } from '@/types/pokemon'


const PokemonList: React.FC<PokemonListType>= ({results}) => {

  return (
    <ul className={styles.list}>
      <PokemonItem />
    </ul>
  )
}

export default PokemonList