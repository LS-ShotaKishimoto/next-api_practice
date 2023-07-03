import React, { useState, useEffect } from 'react'
import styles from './PokemonItem.module.css'
import axios from 'axios'
import { PokemonItemType } from '@/types/pokemon'
import Link from 'next/link'

const PokemonItem: React.FC<PokemonItemType> = () => {
  const [results, setResults] = useState<PokemonItemType[]>([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => setResults(response.data.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      {results.map((result, index) => (
        <li key={index} className={styles.item}>
          <Link href={`/${result.name}`} className={styles.link}>
            {result.name}
          </Link>
        </li>
      ))}
    </>
  )
}

export default PokemonItem