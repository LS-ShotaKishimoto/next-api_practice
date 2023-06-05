import { useRouter } from "next/router";
import React from "react";
import styles from "./Detail.module.css";
import { PokemonDetail } from "@/components/PokemonDetail/PokemonDetail";
import Head from "next/head";
import Link from "next/link";

const isString = (value: unknown): value is string => {
  if (typeof value === "string") {
    return true;
  }
  return false;
};

const Detail = () => {
  const router = useRouter();

  if (!isString(router.query.pokemonName)) {
    return <>クエリパラメータが正しく有りません</>;
  }
  
  return (
    <>
      <Head>
        <title>ポケモン詳細</title>
        <meta name="description" content="ポケモンの詳細ページです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <div className={styles.back_link_wrapper}>
          <Link href="/" className={styles.back_link}>Back</Link>
        </div>
        <div className={styles.detail_wrapper}>
          <PokemonDetail pokemonName={router.query.pokemonName} />
        </div>
      </main>
    </>
  );
};

export default Detail;
