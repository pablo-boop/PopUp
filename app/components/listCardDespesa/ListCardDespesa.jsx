import { FaPen, FaTrash } from 'react-icons/fa'
import styles from './listCardDespesa.module.css'

const ListCardDespesa = ({ title, color, list , exclude, edit}) => {
    return (
        <div className={styles.registrosdespesas} style={{backgroundColor: color}}>
                        <p className={styles.registrosdespesastitle}>{title}</p>
                        <div className={styles.registrosdespesaslist}>
                            {
                                list.map((transaction, index) => (
                                    transaction.type == 'Despesa' && (
                                        <div key={index} className={styles.registrosdespesasitem}>
                                            <p className={styles.registrosdespesasitemdescription}>{transaction.description}</p>
                                            <p className={styles.registrosdespesasitemvalue}>R${transaction.value}</p>
                                            
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

export default ListCardDespesa;