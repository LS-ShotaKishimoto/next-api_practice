import type React from 'react'
import styles from './PokemonList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem'
import type { PokemonItemType, PokemonListType } from '@/types/pokemon'
import { useEffect, useState } from 'react'
import axios, { type AxiosRequestConfig } from 'axios'

const PokemonList = () => {
  const [lists, setLists] = useState<PokemonItemType[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const options: AxiosRequestConfig = {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
      method: 'GET',
      signal: abortController.signal,
    };

    axios(options)
      .then((response) => {
        setLists(response.data.results)
      })
      .catch((error) => console.log(error));

      return () => {
        abortController.abort();
      };
  }, []);

  return (
    <ul className={styles.list}>
      <PokemonItem 
        lists={lists} 
      />
    </ul>
  )
}

export default PokemonList
