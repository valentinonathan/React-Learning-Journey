import styles from './Task.module.css'
import { useState } from 'react';

function Task(props) {
    const [taskStatus, setTaskStatus] = useState(props.status);
    function handleEnterTaskModule(event){
        if (event.key === 'Enter') {
            props.callback1(event.target.value, props.id);
        }
    }
    function handleTaskStatusModule() {
        setTaskStatus(s => !s);
        props.callback2(taskStatus, props.id);
    }
    return(
        <>
        <div className={styles.taskBox}>
            <input type="text" onKeyDown={handleEnterTaskModule} className={styles.inputTask} placeholder='Add a Task...' />
            {taskStatus ? <div className={styles.checkBoxTrue} onClick={handleTaskStatusModule}></div>
                        : <div className={styles.checkBoxFalse} onClick={handleTaskStatusModule}></div>}
            
        </div>
        </>
    );
}

export default Task;