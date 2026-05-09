import styles from "./AsteroidAction.module.css";

export const AsteroidAction = ({isDangerous})=>{
    return <div className={styles.container}>
        <div>Оценка:</div>
        <div style={{ fontWeight: "bold" }}>{isDangerous ? "опасен" : "не опасен"}</div>
        <button className={styles.button}>На уничтожение</button>
    </div>
}