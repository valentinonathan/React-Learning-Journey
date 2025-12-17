import styles from './Task.module.css'
import { useState } from 'react';

function Task(props) {
    const [taskText, setTaskText] = useState("");
    function handleEnterTaskModule(event){
        if (event.key === 'Enter') {
            props.callback(event.target.value, props.id);
        }
    }
    return(
        <>
        <div className={styles.taskBox}>
            <input type="text" onKeyDown={handleEnterTaskModule} className={styles.inputTask} placeholder='Add a Task...' />
            <div className={styles.checkBox}></div>
        </div>
        </>
    );
}

export default Task;