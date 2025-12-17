import styles from './Card.module.css'

function Card(props) {
    return(
        <div className={styles.card} onClick={props.onRemove}>
            <p>This is a card</p>
        </div>
    )
}

export default Card