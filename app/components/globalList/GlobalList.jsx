import styles from './globalList.module.css'
import ListCard from '../listCard/ListCard';
import ListCardDespesa from '../listCardDespesa/ListCardDespesa';

const GlobalList = ({ list, exclude, edit }) => {
    return (
        <div className={styles.registros}>
            <ListCard list={list} title={'Receitas Registradas'} color={'#d0f0c0'} exclude={exclude} edit={edit} />
            <ListCardDespesa list={list} title={'Despesas Registradas'} color={'#f0c0c0'} exclude={exclude} edit={edit} />
        </div>
    )
}

export default GlobalList;