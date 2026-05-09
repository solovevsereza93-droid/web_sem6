import { useState } from "react";
import { Header } from "../components/header/Header";
import { AsteroidsList } from "../components/asteroids-list/Asteroidslist";
import { AsteroidFilters } from "../components/asteroid-filters/AsteroidFilters";
import styles from "./AsteroidsPage.module.css";

export const AsteroidsPage = () => {
  const [isOnlyDanger, setIsOnlyDanger] = useState(false);
  const [isKilometers, setIsKilometers] = useState(true);

  return (
    <div className={styles.container}>
      <Header />
      <hr className={styles.line} />
      <main className={styles.content}>
        <AsteroidFilters 
          isOnlyDanger={isOnlyDanger} 
          setIsOnlyDanger={setIsOnlyDanger}
          isKilometers={isKilometers}
          setIsKilometers={setIsKilometers}
        />
        <div className={styles.banner}>
          <img src="/cosmos.png" alt="Косомс" />
        </div>
        <AsteroidsList 
          isOnlyDanger={isOnlyDanger} 
          isKilometers={isKilometers} 
        />
      </main>
    </div>
  );
}