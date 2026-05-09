import { Header } from "../components/header/Header";
import { AsteroidsList } from "../components/asteroids-list/Asteroidslist";
import styles from "./AsteroidsPage.module.css";

export const AsteroidsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <hr className={styles.line} />
      
      <main className={styles.content}>
        <div className={styles.controls}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Показать только опасные
          </label>
          
          <div className={styles.selector}>
            Расстояние <span className={styles.activeUnit}>в километрах</span>,
            <button className={styles.unitBtn}>_в дистанциях до луны</button>
          </div>
        </div>

        <div className={styles.banner}>
          <img src="/image.png" alt="Космос" />
        </div>

        <AsteroidsList />
      </main>
    </div>
  );
};