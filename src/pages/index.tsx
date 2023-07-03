import React from 'react'
import styles from './Home.module.css'
import PokemonList from '@/components/PokemonList/PokemonList';

const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <PokemonList />
      </main>
    </>
  );
};

export default Home;
