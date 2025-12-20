import styles from './PikachuAPI.module.css'
import {useRef, useState} from 'react'

function PikachuAPI() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    async function fetchPokemon(pokemon) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            if (!response.ok) {
                throw new Error("Cannot fetch data");
            }
            const json = await response.json();
            return json.sprites.front_default;
        } catch(error) {
            console.error(error);
        }
    }
    async function handleFetchPokemon() {
        const url = await fetchPokemon(inputRef.current.value);
        setImage(i => url);
    }

    return (
        <>
        <div className={styles.root}>
            <input ref={inputRef} className={styles.pokemonInput} type="text" placeholder="Enter Pokemon Name" />
            <button className={styles.pokemonButton} onClick={handleFetchPokemon}>Fetch Pokemon</button>
        </div>
        <img src={image} style={{width:"100px", height:"100px"}} />
        </>
    );
}

export default PikachuAPI