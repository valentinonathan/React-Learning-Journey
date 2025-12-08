import styles from './Button.module.css'

function Button(props){

    let count = 1;
    function helper() {
        alert(count);
        count++;
    }
    return(props.isChapter2 ? <button className={styles.button}>Click me</button>
                            : <button onClick={helper}>Click me</button>
    );
}
export default Button