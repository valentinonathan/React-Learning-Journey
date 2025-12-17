import { useState } from 'react';
import styles from './AddRemoveCards.module.css'
import Card from './components/Card/Card';

function AddRemoveCards() {

    const [cards, setCards] = useState([]);

    function addCardHandler(event){
        setCards(c => [...c, crypto.randomUUID()]);
    }

    function removeCardHandler(i){
        setCards(c => c.filter((card) => card !== i));
    }

    return (
        <>
            <button onClick={addCardHandler} className={styles.addTask}>Add Card</button>
            <div className= {styles.cardContainer}>
                {cards.map((card) => <Card key={card} onRemove={() => removeCardHandler(card)}/>)}
            </div>
        </>
    );
}
export default AddRemoveCards