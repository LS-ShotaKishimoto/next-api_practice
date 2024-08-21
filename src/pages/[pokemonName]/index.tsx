import React, { useEffect, useState } from 'react'
import styles from './Detail.module.css'
import type { PokemonDetailType } from '@/types/pokemon';
import { useRouter } from 'next/router';
import axios from 'axios';
import PokemonDetail from '@/components/PokemonDetail/PokemonDetail';

const index = () => {
  const router = useRouter();

  return (
    <PokemonDetail />
  )
}

export default index
