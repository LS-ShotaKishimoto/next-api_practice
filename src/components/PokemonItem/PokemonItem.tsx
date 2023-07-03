import React, { useState, useEffect } from 'react'
import styles from './PokemonItem.module.css'
import axios from 'axios'
import { PokemonItemType } from '@/types/pokemon'

const PokemonItem = () => {
  const [results, setResults] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => setResults(response.data.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
    {results.map((result, index) => (
      <li key={index} className={styles.item}>
        <a href="" className={styles.link}>{result.name}</a>
      </li>
    ))}
    </>
  )
}

export default PokemonItem