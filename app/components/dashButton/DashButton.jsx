import styles from './dashButton.module.css'

const DashButton = ({func, title, color}) => {
    return (
        <button className={styles.buttonreceita} onClick={func} style={{backgroundColor:color}}>{title}</button>
    )
}

export default DashButton;