import { useState } from 'react';
import styles from './AddRemoveCards.module.css'
import Card from './components/Card/Card';

function AddRemoveCards() {

    const [cards, setCards] = useState([]);

    function addCardHandler(event){
        setCards(c => [...c, {id: crypto.randomUUID()}]);
    }

    return (
        <>
            <button onClick={addCardHandler} className={styles.addTask}>Add Card</button>
            <div className= {styles.cardContainer}>
                {cards.map(card => <Card key={card.id}/>)}
            </div>
        </>
    );
}
export default AddRemoveCards