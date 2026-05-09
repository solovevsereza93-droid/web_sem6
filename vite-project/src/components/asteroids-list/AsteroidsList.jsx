import { AsteroidCard } from "../asteroid-card/AsteroidCard";
import { AsteroidController } from "../../AsteroidController";
import styles from "./Asteroidlist.module.css";


export const AsteroidsList = ({ isOnlyDanger, isKilometers }) => {
  const controller = new AsteroidController();
  const allAsteroids = controller.getAsteroids() || [];

  const filteredAsteroids = isOnlyDanger ? allAsteroids.filter(item => item.isDangerous) : allAsteroids;

  return (
    <div className={styles.list}>
      {filteredAsteroids.map((it, index) => (
        <AsteroidCard 
          key={it.id} 
          {...it}
          isKilometers={isKilometers}
          imageType={
            index === 0 
              ? "mini" 
              : index === filteredAsteroids.length - 1 
                ? "big" 
                : "medium"
          } 
        />
      ))}
    </div>
  );
}