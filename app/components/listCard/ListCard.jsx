import { FaPen, FaTrash } from 'react-icons/fa'
import styles from './listCard.module.css'

const ListCard = ({ title, color, list, exclude, edit}) => {
    return (
        <div className={styles.registrosreceitas} style={{backgroundColor: color}}>
                        <p className={styles.registrosreceitastitle}>{title}</p>
                        <div className={styles.registrosreceitaslist}>
                            {
                                list.map((transaction, index) => (
                                    transaction.type == 'Receita' && (
                                        <div key={index} className={styles.registrosreceitasitem}>
                                            <p className={styles.registrosreceitasitemdescription}>{transaction.description}</p>
                                            <p className={styles.registrosreceitasitemvalue}>R${transaction.value}</p>
                                            
                                            <div className={styles.actions}>
                                                <button className={styles.actionsbutton} onClick={() => exclude(transaction.id)}><FaTrash /></button>
                                                <button className={styles.actionsbutton} onClick={() => edit(transaction.id)}><FaPen /></button>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
    )
}

export default ListCard;