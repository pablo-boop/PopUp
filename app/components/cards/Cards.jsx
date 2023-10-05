import styles from './cards.module.css'

const Cards = ({value, title, color}) => {
    return (
        <div className={styles.card} style={{ backgroundColor: color }}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardValue}>R$ {value}</p>
        </div>
    )
}

export default Cards;