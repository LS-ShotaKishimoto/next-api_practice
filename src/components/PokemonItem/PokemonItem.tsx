import type React from 'react'
import styles from './PokemonItem.module.css'
import Link from 'next/link'
import { generateUUID } from '@/utils/generateUUID'
import type { PokemonItemType } from '@/types/pokemon'

type Props = {
  lists: PokemonItemType[];
}

const PokemonItem = ({lists}: Props) => {

  return (
    <>
      {lists.map((item) => (
        <li key={generateUUID()} className={styles.item}>
          <Link href={{
            pathname: `/${item.name}`,
            query: { name: item.name }
          }} className={styles.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </>
  )
}

export default PokemonItem
